<script>
	// Used for imports, and general js
	import styles from './homepage.module.css';
	import HamburgerMenu from '$lib/components/hamburgerMenu.svelte';
	import Typewriter from '$lib/components/typewriter.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import { writable } from 'svelte/store';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import Flicking, { FlickingPanel } from '@egjs/svelte-flicking';
	import '@egjs/flicking/dist/flicking.css';
	import '@egjs/flicking-plugins/dist/flicking-plugins.css';
	import python from 'svelte-highlight/languages/python';
	import php from 'svelte-highlight/languages/php';
	import javascript from 'svelte-highlight/languages/javascript';

	// CAROUSEL

	/**
	 * @type {string | null}
	 */
	let currentLang = null;
	let opacity = tweened(0, { duration: 500, easing: cubicOut });

	$: {
		if (currentLang) {
			let langSet = null;
			if (currentLang === 'python' || currentLang === 'php' || currentLang === 'javascript') {
				langSet = true;
			}
			if (langSet) {
				opacity.set(1); // Transition into div
			} else {
				opacity.set(0);
			}
		} else {
			opacity.set(0);
		}
	}
	// CODEBOX

	let content1Store = writable('');
	let content2Store = writable('');
	let content3Store = writable('');
	let content4Store = writable('');

	let content1 = '';
	let content2 = '';
	let content3 = '';
	let content4 = '';

	let fileCache = {};

	/**
	 *
	 * @param {string} lang -
	 */
	function fetchFiles(lang) {
		// @ts-ignore
		if (fileCache[lang]) {
			// @ts-ignore
			let cachedFiles = fileCache[lang];
			content1Store.set(cachedFiles[0]);
			content2Store.set(cachedFiles[1]);
			content3Store.set(cachedFiles[2]);
			content4Store.set(cachedFiles[3]);
			return Promise.resolve();
		}

		return Promise.all([
			fetch(`/codefiles/${lang}1.txt`).then((response) => response.text()),
			fetch(`/codefiles/${lang}2.txt`).then((response) => response.text()),
			fetch(`/codefiles/${lang}3.txt`).then((response) => response.text()),
			fetch(`/codefiles/${lang}4.txt`).then((response) => response.text())
		]).then(([data1, data2, data3, data4]) => {
			// @ts-ignore
			fileCache[lang] = [data1, data2, data3, data4];
			content1Store.set(data1);
			content2Store.set(data2);
			content3Store.set(data3);
			content4Store.set(data4);
		});
	}
	$: {
		content1 = $content1Store;
		content2 = $content2Store;
		content3 = $content3Store;
		content4 = $content4Store;
	}

	let isPythonContentStored = false;
	$: {
		if (
			content1 !== undefined &&
			content2 !== undefined &&
			content3 !== undefined &&
			content4 !== undefined
		) {
			isPythonContentStored = true;
		}
	}
	/**
	 * @param {string | null} lang
	 */
	function handleLanguageClick(lang) {
		if (currentLang === lang) {
			currentLang = null;
			opacity.set(0); // fade out
			return;
		}
		currentLang = lang;
		if (lang !== null) {
			opacity.set(0); // fade out before fetching
			fetchFiles(lang).then(() => {
				opacity.set(1); // fade in after fetching
			});
		}
	}
</script>

<svelte:head>
	<title>Home - BadPingHere</title>
	<meta name="description" content="BadPingHere's website homepage." />
	{@html atomOneDark}
</svelte:head>

<div class={styles.page} id="page">
	<div id="header" class={styles.header}>
		<HamburgerMenu isHome={true} />
		<div id="header" class={styles.title}>
			<Typewriter text="BadPingHere" />
		</div>
		<h2>
			I'm a <span>17</span> year old developer
		</h2>
		<h2>
			proficient in
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<span
				class={styles['lang-button']}
				style="color: var(--color-homepagePython)"
				data-panel="Python"
				on:click={() => handleLanguageClick('python')}
			>
				Python
				<span class={styles.underline} style="background-color: var(--color-homepagePython)"></span>
			</span>,
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<span
				class={styles['lang-button']}
				style="color: var(--color-homepagePHP)"
				data-panel="PHP"
				on:click={() => handleLanguageClick('php')}
			>
				PHP
				<span class={styles.underline} style="background-color: var(--color-homepagePHP)"></span>
			</span>,
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<span
				class={styles['lang-button']}
				style="color: var(--color-homepageJS)"
				data-panel="JS"
				on:click={() => handleLanguageClick('javascript')}
			>
				Javascript
				<span class={styles.underline} style="background-color: var(--color-homepageJS)"></span>
			</span>, and more.
		</h2>
		<div id="images">
			<a
				class={styles.socialmedia}
				href="https://github.com/BadPingHere"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img class={styles.githubIMG} alt="Github Logo" />
			</a>
			<!-- a whitespace shows here. I dont know how to get rid of it. i cant find how. god help me. -->
			<a
				class={styles.socialmedia}
				href="https://discord.com/users/736028271153512489"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img class={styles.discordIMG} alt="Discord Logo" />
			</a>
		</div>
	</div>
	<div id="content" class={styles.content} style="opacity: {$opacity}">
		{#if currentLang === 'python'}
			<Flicking options={{ circular: true, renderOnlyVisible: true, defaultIndex: 2 }}>
				<FlickingPanel class={styles.code}>
					<Highlight language={python} code={content1} let:highlighted>
						<LineNumbers {highlighted} wrapLines hideBorder />
					</Highlight>
				</FlickingPanel>
				<FlickingPanel class={styles.code}>
					<Highlight language={python} code={content2} let:highlighted>
						<LineNumbers {highlighted} wrapLines hideBorder />
					</Highlight>
				</FlickingPanel>
				<FlickingPanel class={styles.code}>
					<Highlight language={python} code={content3} let:highlighted>
						<LineNumbers {highlighted} wrapLines hideBorder />
					</Highlight>
				</FlickingPanel>
				<FlickingPanel class={styles.code}>
					<Highlight language={python} code={content4} let:highlighted>
						<LineNumbers {highlighted} wrapLines hideBorder />
					</Highlight>
				</FlickingPanel>
			</Flicking>
		{:else if currentLang === 'php'}
			<Flicking options={{ circular: true, renderOnlyVisible: true, defaultIndex: 2 }}>
				<FlickingPanel class={styles.code}>
					<Highlight language={php} code={content1} let:highlighted>
						<LineNumbers {highlighted} wrapLines hideBorder />
					</Highlight>
				</FlickingPanel>
				<FlickingPanel class={styles.code}>
					<Highlight language={php} code={content2} let:highlighted>
						<LineNumbers {highlighted} wrapLines hideBorder />
					</Highlight>
				</FlickingPanel>
				<FlickingPanel class={styles.code}>
					<Highlight language={php} code={content3} let:highlighted>
						<LineNumbers {highlighted} wrapLines hideBorder />
					</Highlight>
				</FlickingPanel>
				<FlickingPanel class={styles.code}>
					<Highlight language={php} code={content4} let:highlighted>
						<LineNumbers {highlighted} wrapLines hideBorder />
					</Highlight>
				</FlickingPanel>
			</Flicking>
		{:else if currentLang === 'javascript'}
			<Flicking options={{ circular: true, renderOnlyVisible: true, defaultIndex: 2 }}>
				<FlickingPanel class={styles.code}>
					<Highlight language={javascript} code={content1} let:highlighted>
						<LineNumbers {highlighted} wrapLines hideBorder />
					</Highlight>
				</FlickingPanel>
				<FlickingPanel class={styles.code}>
					<Highlight language={javascript} code={content2} let:highlighted>
						<LineNumbers {highlighted} wrapLines hideBorder />
					</Highlight>
				</FlickingPanel>
				<FlickingPanel class={styles.code}>
					<Highlight language={javascript} code={content3} let:highlighted>
						<LineNumbers {highlighted} wrapLines hideBorder />
					</Highlight>
				</FlickingPanel>
				<FlickingPanel class={styles.code}>
					<Highlight language={javascript} code={content4} let:highlighted>
						<LineNumbers {highlighted} wrapLines hideBorder />
					</Highlight>
				</FlickingPanel>
			</Flicking>
		{/if}
	</div>
</div>
