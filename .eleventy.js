// .eleventy.js
module.exports = function (eleventyConfig) {
  // Copia la cartella admin così Decap CMS può caricare /admin/
  eleventyConfig.addPassthroughCopy("src/admin");

  // (opzionale) se un giorno avrai immagini in src/images
  // eleventyConfig.addPassthroughCopy({ "src/images": "images" });

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
