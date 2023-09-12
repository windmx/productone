import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    category: z.string(),
    author: z.string(),
    publishDate: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()),
    lang: z.string(),
    // date: z.date()
  })
});

export const collections = {
  'blog': blogCollection
};