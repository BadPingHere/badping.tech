<script>
	import HamburgerMenu from '$lib/components/hamburgerMenu.svelte';
	import styles from '../projects/projects.module.css';
	import '../homepage.module.css';
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	const projects = [
		{
			projectID: '0',
			projectName: 'badping.tech',
			languages: ['javascript', 'css3'],
			projectDetails:
				"The entire code for the site you're on, badping.tech. Originally written in React, but ported over to SvelteKit.",
			githubLink: 'https://github.com/BadPingHere/badping.tech',
			externalLink: 'https://badping.tech'
		},
		{
			projectID: '1',
			projectName: 'talk.badping.tech', // Project Name
			languages: ['php', 'css3', 'javascript'], // Languages
			projectDetails:
				"A shoutbox application, with a nice ol' stolen login page. Used to be my biggest project, now look at me. ", // Project Details
			githubLink: 'https://github.com/BadPingHere/talk.badping.live' // Github Link
			//externalLink="https://badping.tech", // External Link (Optional)
		},
		{
			projectID: '2',
			projectName: 'Trusted',
			languages: ['python', 'php', 'css3'],
			projectDetails:
				"A easy-to-use Scraper and Web UI for the game Untrusted. This took a long time, and I'm really happy with the result.",
			githubLink: 'https://github.com/BadPingHere/Trusted'
		},
		{
			projectID: '3',
			projectName: 'Youtube Downloader',
			languages: ['python'],
			projectDetails:
				'A python youtube downloader, allowing for downloads of up to 1440p, and with options to include audio and thumbnails, which oddly a lot of projects do not.',
			githubLink: 'https://github.com/BadPingHere/Youtube-DL'
		},
		{
			projectID: '4',
			projectName: 'Startup',
			languages: ['python', 'rust/red'],
			projectDetails:
				'A startup python script, along with a rust version, that I personally use every time I launch my computer. It has its quirks, but it works well for me.',
			githubLink: 'https://github.com/BadPingHere/startup'
		}
	];
</script>

<svelte:head>
	<title>Projects- BadPingHere</title>
	<meta name="description" content="A list of projects made by BadPingHere" />
</svelte:head>

<div class={styles.app} style="height: 100vh;">
	<HamburgerMenu isHome={false} />

	<Fullpage>
		{#each projects as project (project.projectID)}
			<FullpageSection title={project.projectName} disableCentering={true}>
				<div class={styles.card}>
					<div class={styles.infoholder}>
						<h2 class={styles.title}>{project.projectName}</h2>
						<div class={styles.images}>
							{#each project.languages as language (language)}
								<div class={styles.socialmedia}>
									<img src={`https://cdn.simpleicons.org/${language}`} alt={`${language} Logo`} />
								</div>
							{/each}
						</div>
						<p>{project.projectDetails}</p>
						<div class={styles.images}>
							<a
								class={styles.socialmedia}
								href={project.githubLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img class={styles.githubIMG} alt="Github Logo" />
							</a>
							{#if project.externalLink}
								<a
									class={styles.socialmedia}
									href={project.externalLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img class={styles.externalIMG} alt="External Link Logo" />
								</a>
							{/if}
						</div>
					</div>
				</div>
			</FullpageSection>
		{/each}
	</Fullpage>
</div>
