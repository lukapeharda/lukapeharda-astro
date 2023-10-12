import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get(context) {
	const posts = await getCollection('article');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			id: post.id,
			title: post.data.title,
			pubDate: new Date(post.data.date),
			description: post.data.excerpt,
			link: `/article/${post.slug}/`,
		})),
	});
}
