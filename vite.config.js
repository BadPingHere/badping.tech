import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	optimizeDeps: {
		include: ['@egjs/svelte-flicking']
	},
	plugins: [sveltekit()]
});
