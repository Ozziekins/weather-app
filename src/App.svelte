<script lang="ts">
  import { location, unit } from "$src/stores";
  import { onMount } from "svelte";

  import Header from "$lib/Header/Header.svelte";
  import SearchBar from "$lib/SearchBar/SearchBar.svelte";
  import CurrentTemp from "$lib/CurrentTemp/CurrentTemp.svelte";
  import ForecastTemp from "$lib/ForecastTemp/ForecastTemp.svelte";

  onMount(unit.autoset);
  onMount(location.autoset);
</script>

<!-- Global styles -- skip to end for content-->
<svelte:head>
  <style lang="scss">
    /*
      Josh's Custom CSS Reset
      https://www.joshwcomeau.com/css/custom-css-reset/
    */

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    * {
      margin: 0;
    }
    html,
    body {
      height: 100%;
    }
    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }
    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }
    #root,
    #__next {
      isolation: isolate;
    }

    // Global styles

    :root {
      font-family: $font;
      font-size: $fs-default;
      font-weight: $fw-reg;
      color: $black;
    }

    body {
      background-image: url("./src/assets/background.jpg");
      background-size: cover;
      background-position: center;
      background-color: $background-white;
    }
  </style>
</svelte:head>

<div class="container">
  <div class="wrapper">
    <header class="header">
      <Header />
    </header>
    <div class="search-bar" role="search">
      <SearchBar />
    </div>
    <main class="current">
      <CurrentTemp />
    </main>
    <ForecastTemp />
  </div>
</div>

<!-- App styles -->
<style lang="scss">
  .wrapper {
    width: 100%;
    min-height: 80vh;
    // background-image: url("./src/assets/background.jpg");
    background-color: $pure-white;
    background-blend-mode: multiply;
    background-size: cover;
    padding: 1.5rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    border-radius: 0.5rem;
    // overflow: auto;

    @media (min-width: $bp-tablet) {
      padding: 2.5rem;
    }
  }

  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    height: 80vh;
    // position: relative;
  }

  .container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(249, 247, 254, 0.8);
    z-index: -1;
  }

  .header {
    margin-bottom: 1.5rem;
  }

  .search-bar {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center; 
  }

  .current {
    flex-grow: 1;
  }
</style>
