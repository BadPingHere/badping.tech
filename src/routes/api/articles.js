export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('$lib/articles/*.svx');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver();
			const post = await import(`../../lib/articles/${metadata.slug}.svx`);
			const Content = post.default;

			const { html } = Content.render();

			const wordCount = html.split(/\s+/).length;
			const readTime = Math.floor(wordCount / 200);

			return {
				meta: metadata,
				readTime: readTime
			};
		})
	);

	return allPosts;
};
