import moment from "moment";

moment.locale("en");

export default function (eleventyConfig) {  
  eleventyConfig.setInputDirectory("src");
  //eleventyConfig.setIncludesDirectory("_includes"); // default
  //eleventyConfig.setDataDirectory("_data"); // default
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.setOutputDirectory("docs");

  eleventyConfig.addPassthroughCopy("src/assets/style");
  eleventyConfig.addPassthroughCopy("src/assets/image");

  eleventyConfig.addFilter("yyyy", (d) => {
    return moment(d).format('YYYY');
  });
  eleventyConfig.addFilter("mmyyyy", (d) => {
    return moment(d).format('MM/YYYY');
  });
  eleventyConfig.addFilter("mmmyyyy", (d) => {
    return moment(d).format('MMM. YYYY');
  });
  eleventyConfig.addFilter("azTitle", (arr) => {
    return arr.sort((a, b) => a.title > b.title ? 1 : -1);
  });
  eleventyConfig.addFilter("dateAsc", (arr) => {
    return arr.sort((a, b) => moment().unix(a.start) > moment(b.start).unix() ? 1 : -1);
  });
  eleventyConfig.addFilter("dateDesc", (arr) => {
    return arr.sort((a, b) => moment().unix(a.start) > moment(b.start).unix() ? -1 : 1);
  });
  eleventyConfig.addFilter("preference", (arr) => {
    return arr.sort((a, b) => a.preference > b.preference ? -1 : 1);
  });
  eleventyConfig.addFilter("years", (arr) => {
    return arr.sort((a, b) => a.preference > b.preference ? -1 : 1);
  });
};