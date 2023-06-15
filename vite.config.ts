// import { sveltekit } from '@sveltejs/kit/vite';
import { svelte } from "@sveltejs/vite-plugin-svelte";
// import { defineConfig } from "vite";
import { defineConfig } from 'vitest/config';
import * as path from "path";

export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
		  "$src": path.resolve("./src"),
		  "$stores": path.resolve("./src/stores"),
		  "$lib": path.resolve("./src/lib"),
		  "$assets": path.resolve("./src/assets"),
		  "$utils": path.resolve("./src/utils"),
		},
	  },
	  base: "/weather-app/",
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
