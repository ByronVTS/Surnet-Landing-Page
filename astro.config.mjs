import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import yaml from '@rollup/plugin-yaml';
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()]
  },
  integrations: [tailwind(), react(), mdx(), sitemap(), icon({
    include: {
      mdi: ["*"], // (Default) Loads entire Material Design Icon set
      mdi: ["account"], // Loads only Material Design Icon's "account" SVG
    },
  }),]
});