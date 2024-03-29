import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],

	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md', '.svx']
		})
	],
	compilerOptions: {
		customElement: true
	},
	kit: {
		adapter: adapter()
	}
};

export default config;
