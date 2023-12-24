<script>
	// Import the necessary styles directly
	import '../components/fontawesome.css';
	import ThemeSwitcher from '$lib/components/themeSwitch.svelte';

	// Export a prop to determine if it's the home page
	export let isHome = false; // Provide a default value
</script>

<input type="checkbox" id="active" />

<label for="active" class="menu-btn">
	<i class="fas fa-bars"></i>
</label>

<div class="wrapper" style="font-family: Segoe UI">
	<ThemeSwitcher />
	<ul>
		<li>
			<a style="box-shadow: none;" href="/contact"> Contact </a>
		</li>
		<li>
			<a style="box-shadow: none;" href="/projects"> Projects </a>
		</li>
		<li>
			<a style="box-shadow: none;" href="/blog"> Blog </a>
		</li>
		{#if !isHome}
			<li>
				<a style="box-shadow: none;" href="/"> Back to home </a>
			</li>
		{/if}
	</ul>
</div>
