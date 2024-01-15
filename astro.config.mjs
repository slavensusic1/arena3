import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// import vercel from "@astrojs/vercel/serverless"; // Commented out for static site generation

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), tailwind()],
  bundle: {
    external: ['prop-types'] // Add 'prop-types' as an external dependency
  },
  output: "static", // Changed from "server" to "static"
  // adapter: vercel() // Commented out for static site generation
});
