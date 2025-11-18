module.exports = function(eleventyConfig) {

  // Copia tutta la cartella admin (serve per Decap CMS)
  eleventyConfig.addPassthroughCopy("src/admin");

  // Copia eventuali asset (se servono)
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
