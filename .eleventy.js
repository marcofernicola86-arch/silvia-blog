// .eleventy.js
module.exports = function (eleventyConfig) {
  // Copia la cartella admin così Decap CMS può caricare /admin/
  eleventyConfig.addPassthroughCopy("src/admin");

  // Copia le immagini caricate nel CMS (necessario per farle vedere nel sito!)
  eleventyConfig.addPassthroughCopy("src/images/uploads");

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
