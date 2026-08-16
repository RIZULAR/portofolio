import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    cat: z.string(),
    color: z.string().default('from-brand to-amber-500'),
    tech: z.string().optional(),
    image: z.string().optional(),
    link: z.string().url().optional(),
    order: z.number().default(99),
  }),
});

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    color: z.string().default('from-brand to-amber-500'),
    image: z.string().optional(),
    link: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { projects, blogs };
