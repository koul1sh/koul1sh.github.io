import { defineConfig } from "astro/config";
import astroSage from "astro-sage";
import sageConfig from "./sage.config";

// The theme lives in node_modules/astro-sage and injects every route.
// This repo holds only content (src/content/) and site settings (sage.config.ts).
export default defineConfig({
  site: sageConfig.site.url,
  integrations: [astroSage(sageConfig)],
});
