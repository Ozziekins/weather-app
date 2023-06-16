<script lang="ts">
  import { location } from "$src/stores";
  import { search } from "$src/utils";
  import type { City } from "$stores/location";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import DataList from "./DataList.svelte";

  let editing: boolean = false;
  let value: string = "";
  let cities: City[];
  let wrapper: HTMLDivElement;
  let searchInput: HTMLInputElement;

  const handleFocus = () => {
    editing = true;
    value = "";
  };

  const closeDataList = () => {
    editing = false;
  };

  onMount(() => {
    window.addEventListener("click", (evt) => {
      !wrapper.contains(evt.target as Node) && closeDataList();
    });
  });

  const handleInput = async (evt: Event) => {
    const inputValue = searchInput.value;
    if (inputValue) {
      cities = await search(`https://api.openweathermap.org/geo/1.0/direct`, {
        params: {
          q: inputValue,
          limit: 5,
          appid: import.meta.env.VITE_WEATHER_API_KEY,
        },
      });
    }
  };

  const handleSearch = () => {
    handleInput({} as Event);
  };

  // Display the current chosen city if the user is not editing the search box
  $: {
    if (!editing && $location.name)
      value = `${$location.name}, ${$location.country}`;
  }
</script>

<div class="wrapper" bind:this={wrapper}>
  <div class="field-wrapper">
    <input
      class="field"
      type="text"
      id="search"
      on:focus={handleFocus}
      on:input={handleInput}
      bind:this={searchInput}
      placeholder="Enter a city..." 
    />
    <button class="search-button" on:click={handleSearch}>
      Search
    </button>
  </div>
  {#if editing}
    <div class="datalist-wrapper" transition:fly={{ y: -10, duration: 500 }}>
      <DataList {cities} {value} {closeDataList} />
    </div>
  {/if}
</div>

<style lang="scss">
  .wrapper {
    flex-grow: 1;
    position: relative;

    @media (min-width: $bp-tablet) {
      flex-grow: 0;
    }
  }

  .field-wrapper {
    position: relative;
    &::before {
      content: url("$assets/icon-search.svg");
      position: absolute;
      right: 7rem;
      top: 50%;
      transform: translateY(-50%);
    }
    display: flex;
    align-items: center;
  }

  .field {
    border: none;
    display: inline-block;
    font-size: $fs-small;
    background-color: $background-white;
    padding: 0.6rem 0.8rem;
    text-align: left;
    width: 100%;
    border-radius: 0.5em;
  }

  .search-button {
    border: none;
    border-radius: 0.1em;
    font-size: $fs-small;
    padding: 0.6rem 1.2rem;
    background-color: $light-purple;
    color: $background-white;
    cursor: pointer;
    margin-left: 0.5rem;
    border-radius: 0.5em;
  }

  .datalist-wrapper {
    position: absolute;
    z-index: 2;
    border-radius: 0.1em;
    top: calc(100% + 1em);
    inset-inline: 0;
    background-color: $background-white;
  }
</style>
