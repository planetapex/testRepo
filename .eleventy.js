let Nunjucks = require("nunjucks");
const {
    DateTime
  } = require("luxon");

module.exports = function(eleventyConfig) {
    let nunjucksEnvironment = new Nunjucks.Environment(
        new Nunjucks.FileSystemLoader("_includes")
      );
  

        // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
          zone: 'utc'
        }).toFormat('yy-MM-dd');
      });
  
  

      eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {
          zone: 'utc'
        }).toFormat("dd-MM-yy");
      });
    
      eleventyConfig.setLibrary("njk", nunjucksEnvironment);
    


  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('admin')

 


};