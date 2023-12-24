// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import { validArticles } from '../blog/articlesStore';

export async function load({ fetch }) {
	try {
		const response = await fetch('/api');
		const articlesData = await response.json();
		validArticles.set(articlesData);
		return { validArticles };
	} catch (error) {
		// yeah i code.
		console.error('Error loading articles:', error);
		return { props: { validArticles: [] } };
	}
}
