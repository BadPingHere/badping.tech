<script>
	import HamburgerMenu from '$lib/components/hamburgerMenu.svelte';
	import '$lib/fonts/fonts-post.css';
	import '$lib/fonts/fonts-shared.css';
	import '../homepage.module.css';
	import styles from '../blog/blog.module.css';

	import { validArticles } from '../blog/articlesStore';
	/**
	 * @type {any[]}
	 */
	let articles = [];
	$: {
		articles = $validArticles;
	}
</script>

<svelte:head>
	<title>Blog - BadPingHere</title>
	<meta name="description" content="A Blog page for BadPingHere" />
</svelte:head>

<div>
	<style>
		h1 {
			font-family: Montserrat, sans-serif;
			font-weight: 900;
			text-rendering: optimizeLegibility;
			font-size: 1.98818rem;
			line-height: 2.625rem;
			margin-bottom: 0;
			margin-top: 0;
		}
		h1 > a {
			box-shadow: none;
			text-decoration: none;
			color: #fff;
		}
		a {
			box-shadow: 0 1px 0 0 currentColor;
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
	</style>
	<div>
		<div class={styles.container} tabIndex={-1}>
			<div class={styles.containerInner}>
				<HamburgerMenu isHome={false} />
				<div class={styles.content}>
					<header class={styles.title}>
						<h1>
							<a href="/blog">Blog</a>
						</h1>
					</header>
					<main>
						{#each articles as { meta: { title, date, description, slug }, readTime: realTime }}
							<article>
								<header>
									<h3 class={styles.articleTitle}>
										<a style="boxShadow: none" href="/blog/{slug}">
											{title}
										</a>
									</h3>
									<small>{date} • {realTime} min read</small>
								</header>
								<p>{description}</p>
							</article>
						{/each}
					</main>
				</div>
			</div>
		</div>
	</div>
</div>
