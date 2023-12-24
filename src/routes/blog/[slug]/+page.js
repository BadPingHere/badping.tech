// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load({ params, fetch }) {
	// for some reason $lib doesnt work, so ig?
	const post = await import(`../../../lib/articles/${params.slug}.svx`);
	const { title, date } = post.metadata;
	const Content = post.default;

	// all this to get the fucking like word counter fucking shit.
	const response = await fetch('/api');
	const articlesData = await response.json();
	const article = articlesData.find(
		(/** @type {{ meta: { slug: any; }; }} */ article) => article.meta.slug === params.slug
	);
	const readTime = article.readTime;

	return {
		Content,
		title,
		date,
		readTime
	};
}
