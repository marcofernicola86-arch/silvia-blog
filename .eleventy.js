const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Collezione "posts" ordinata per data decrescente, escludendo le bozze
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .filter((item) => !item.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  // Filtro data leggibile
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  // Filtro excerpt (primi ~200 caratteri del contenuto, senza HTML)
  eleventyConfig.addFilter("excerpt", (content) => {
    if (!content) return "";
    const plain = content.replace(/(<([^>]+)>)/gi, "");
    const match = plain.match(/^(.{1,200})\b/);
    return match ? match[1] + "…" : plain;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
