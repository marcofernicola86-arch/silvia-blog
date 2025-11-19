// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  // ---- Filtro DATE (per nunjucks) ----
  eleventyConfig.addFilter("date", (value, format = "dd LLL yyyy") => {
    return DateTime.fromJSDate(new Date(value)).toFormat(format);
  });

  // Copia cartella admin
  eleventyConfig.addPassthroughCopy("src/admin");

  // Copia eventuali immagini
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  return {
    dir: {
      input: "src",
      includes: "_includes/layouts",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md"]
  };
};
eleventyConfig.addCollection("posts", function (collectionApi) {
  return collectionApi.getFilteredByGlob("src/posts/*.md");
});
eleventyConfig.addPassthroughCopy({ "src/images/uploads": "images/uploads" });
