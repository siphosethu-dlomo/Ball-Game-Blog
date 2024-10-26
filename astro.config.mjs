import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), mdx(), alpinejs()],
  output: 'server',
  adapter: netlify(),
});