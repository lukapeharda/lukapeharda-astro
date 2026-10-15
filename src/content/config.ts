import { defineCollection, z } from 'astro:content';

const article = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        url: z.string(),
        date: z.string()
    }),
});

const projects = defineCollection({
    type: 'data',
    schema: z.object({
        order: z.number(),
        title: z.string(),
        url: z.string(),
        year: z.number(),
        status: z.enum(['Active', 'Zombie', 'Dead']),
        description: z.string(),
        why: z.string(),
        learned: z.string(),
        image: z.string(),
        technologies: z.array(z.string()),
        color: z.enum(['red', 'yellow', 'green', 'blue'])
    }),
});

const bookRecommendations = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        url: z.string(),
        recommendationYear: z.number()
    }),
});

const podcastRecommendations = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string(),
        recommendationYear: z.number()
    }),
});


export const collections = { article, projects, bookRecommendations, podcastRecommendations };
