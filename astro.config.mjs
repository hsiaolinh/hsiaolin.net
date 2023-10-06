import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { ogImageGenerator } from "./integrations/og-image-generator.ts";

export default defineConfig({
  site: "https://hsiaolin.net/",
  trailingSlash: "always",
  scopedStyleStrategy: 'class',
  integrations: [
    mdx(),
    sitemap(),
    ogImageGenerator(),
  ],
});
