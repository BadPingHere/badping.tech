<script>
	import './global.css';
	import { theme } from '$lib/stores';
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`/themes/${$theme}.css`} />
</svelte:head>

<slot />
