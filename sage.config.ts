import { defineSageConfig } from "astro-sage";

// Site settings: the one place for title, author, links and theme options.
// All options: https://github.com/chintak/astro-sage/blob/main/FEATURES.md
export default defineSageConfig({
  site: {
    url: "https://koul1sh.github.io/",
    title: "koul1sh",
    description: "Notes and writing by Vansh Koul.",
    author: "Vansh Koul",
    lang: "en",
    timezone: "Asia/Kolkata",
    dir: "ltr",
  },
  home: {
    title: "koul1sh",
    intro: "Notes and writing by Vansh Koul.",
  },
  posts: { perPage: 8, perIndex: 6 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: false,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [{ name: "github", url: "https://github.com/koul1sh" }],
});
