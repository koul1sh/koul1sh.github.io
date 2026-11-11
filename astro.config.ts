import { defineConfig } from "astro/config";
import type { AstroIntegration } from "astro";
import astroSage from "astro-sage";
import sageConfig from "./sage.config";

// Cloudflare Web Analytics beacon, added to <head> on every page.
// The theme has no analytics option, so a tiny integration adds it here.
const cloudflareAnalytics: AstroIntegration = {
  name: "cloudflare-web-analytics",
  hooks: {
    "astro:config:setup": ({ injectScript }) => {
      injectScript(
        "head-inline",
        `(function () {
  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.setAttribute("data-cf-beacon", '{"token": "d587c42fd2fe4d50a538da164629a723"}');
  document.head.appendChild(s);
})();`,
      );
    },
  },
};

// The theme lives in node_modules/astro-sage and injects every route.
// This repo holds only content (src/content/) and site settings (sage.config.ts).
export default defineConfig({
  site: sageConfig.site.url,
  integrations: [astroSage(sageConfig), cloudflareAnalytics],
});
