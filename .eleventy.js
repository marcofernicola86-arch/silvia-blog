// .eleventy.js
module.exports = function (eleventyConfig) {

  // Copia la cartella admin così com'è
  eleventyConfig.addPassthroughCopy("src/admin");

  // Copia le immagini se in futuro ne hai
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    }
  };
};
