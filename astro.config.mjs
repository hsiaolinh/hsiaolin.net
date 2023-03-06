import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { ogImageGenerator } from "./integrations/og-image-generator.ts";

export default defineConfig({
  site: "https://hsiaolin.net/",
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    ogImageGenerator(),
  ],
});
