<script>
	export let text = '';
	let i = 0;
	let speed = 100; // Speed of typing in milliseconds

	setInterval(() => {
		if (i < text.length) {
			i += 1;
		}
	}, speed);
</script>

<div id="typewriter">
	{#each text.slice(0, i) as char, index (index)}
		<span>{char === '\\' ? '' : char}</span>
	{/each}
	<span class="cursor"></span>
</div>

<style>
	.cursor {
		border-right: 2.5px solid var(--color-cursor);
		animation: blink 1s infinite;
		margin-left: 2px;
	}
	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
