import dayjs from "dayjs";

export default function (eleventyConfig) {  
    eleventyConfig.setInputDirectory("src");
    //eleventyConfig.setIncludesDirectory("_includes"); // default
    //eleventyConfig.setDataDirectory("_data"); // default
    eleventyConfig.setLayoutsDirectory("_layouts");
    eleventyConfig.setOutputDirectory("docs");

    eleventyConfig.addPassthroughCopy("src/assets/style");
    eleventyConfig.addPassthroughCopy("src/assets/image");

    eleventyConfig.addFilter("yyyy", (d) => {
        return dayjs(d).format("YYYY");
    });
    eleventyConfig.addFilter("mmyyyy", (d) => {
        return dayjs(d).format("MM/YYYY");
    });
    eleventyConfig.addFilter("mmmyyyy", (d) => {
        return dayjs(d).format("MMM. YYYY");
    });
    eleventyConfig.addFilter("azTitle", (arr) => {
        return arr.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
    });
    eleventyConfig.addFilter("dateAsc", (arr) => {
        return arr.sort((a, b) => dayjs(a.start).format("YYYYMMDD") > dayjs(b.start).format("YYYYMMDD") ? -1 : 1);
    });
    eleventyConfig.addFilter("dateDesc", (arr) => {
        return arr.sort((a, b) => dayjs(a.start).format("YYYYMMDD") > dayjs(b.start).format("YYYYMMDD") ? 1 : -1);
    });
    eleventyConfig.addFilter("preference", (arr) => {
        return arr.sort((a, b) => a.preference > b.preference ? -1 : 1);
    });
    eleventyConfig.addFilter("years", (arr) => {
        return arr.sort((a, b) => a.preference > b.preference ? -1 : 1);
    });
};