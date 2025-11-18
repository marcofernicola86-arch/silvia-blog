module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    }
  };
};
