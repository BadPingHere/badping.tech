<script>
	export let data;
	const { title, date, Content, readTime } = data;
	import styles from '../blog.module.css';
	import HamburgerMenu from '$lib/components/hamburgerMenu.svelte';
	import '$lib/fonts/fonts-post.css';
	import '$lib/fonts/fonts-shared.css';
</script>

<div>
	<style>
		h1 {
			font-family: Montserrat, sans-serif;
			font-weight: 900;
			text-rendering: optimizeLegibility;
			font-size: 1.98818rem;
			line-height: 2.625rem;
			margin-bottom: 1rem;
			margin-top: 0;
		}
		h1 > a {
			box-shadow: none;
			text-decoration: none;
			color: #fff;
		}
		a {
			box-shadow: 0 1.1px 0 0 currentColor;
			color: var(--color-blogTextLink);
			text-decoration: none;
		}
		a:hover,
		a:active {
			box-shadow: none;
		}
		p {
			margin: 0;
		}

		body {
			background-color: var(--color-blogBG);
			-webkit-font-smoothing: antialiased;
			font:
				100%/1.75 'Merriweather',
				'Georgia',
				serif;
			font-weight: normal;
			font-family: 'Merriweather', 'Georgia', serif;
			font-kerning: auto;
			font-feature-settings: normal;
		}
		blockquote {
			border-left: 5px solid #ccc;
			margin: 1.5em 10px;
			padding: 0.5em 10px;
		}
		img {
			width: 100%;
		}
	</style>
	<div class={styles.container} tabIndex={-1}>
		<div class={styles.containerInner}>
			<HamburgerMenu isHome={false} />
			<div class={styles.content}>
				<header class={styles.title}>
					<h3 class={styles.articleTitle}>
						<a style="box-shadow: none; text-decoration: none;" href="/blog"> Blog </a>
					</h3>
				</header>
				<main>
					<article>
						<header>
							<h1 class={styles.articleName}>
								{title}
							</h1>
							<p class={styles.articleDate}>
								{date} • {readTime} min read
							</p>
						</header>
						<div id="blogpost">
							<Content />
						</div>
					</article>
				</main>
				<aside>
					<h3 class={styles.articleTitle}>
						<a style="box-shadow: none; text-decoration: none; font-size: 1.4427rem;" href="/blog">
							Blog
						</a>
					</h3>
				</aside>
			</div>
		</div>
	</div>
</div>
