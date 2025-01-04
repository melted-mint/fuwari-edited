import { defineCollection, z } from 'astro:content'
import { file, glob } from 'astro/loaders'

const novel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/novel' }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional().default('Melted_Mint'),
    published: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional().default(''),
    image: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    category: z.string().optional().default(''),
    lang: z.string().optional().default(''),

    /* For internal use */
    prevTitle: z.string().default(''),
    prevSlug: z.string().default(''),
    nextTitle: z.string().default(''),
    nextSlug: z.string().default(''),
  }),
})

export const collections = {
  novel,
}
