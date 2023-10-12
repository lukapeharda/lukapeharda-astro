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

const activeProjects = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        title: z.string(),
        url: z.string(),
        description: z.string(),
        image: z.string(),
        technologies: z.array(z.string()),
        color: z.enum(['red', 'yellow', 'green', 'blue']),
        hoverColor: z.enum(['red', 'yellow', 'green', 'blue'])
    }),
});

const archivedProjects = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        year: z.number(),
        description: z.string(),
        status: z.enum(['Zombie', 'Dead', 'Active', 'Active Development']),
        url: z.string().optional()
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


export const collections = { article, archivedProjects, activeProjects, bookRecommendations, podcastRecommendations };
