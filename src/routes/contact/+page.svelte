<script>
	import HamburgerMenu from '$lib/components/hamburgerMenu.svelte';
	import Typewriter from '$lib/components/typewriter.svelte';
	import styles from '../contact/contact.module.css';
	import '../homepage.module.css';
</script>

<svelte:head>
	<title>Contact- BadPingHere</title>
	<meta name="description" content="A contact page for BadPingHere" />
</svelte:head>

<div>
	<HamburgerMenu isHome={false} />
	<div class={styles.container}>
		<div class={styles.title}>
			<Typewriter text="Contact Me" />
		</div>
		<div class={styles.content}>
			<p>
				You can contact me via my <a
					href="https://discord.com/users/736028271153512489"
					target="_blank"
					rel="noopener noreferrer">discord</a
				>.
			</p>
		</div>
	</div>
</div>
