# Simple Gulp

I couldn't find a quick-and-dirty Gulp example that:

* Automagically compiles, minifies, and prefixes SASS > CSS
* Duplicates changes from source HTML to a working build directory
* Combines and minifies JS assets (to reduce page request bloat)
* Watches all directories and does the needful

Simple Gulp does all of these things in a pretty straightforward manner. I've intentionally left out things like sourcemaps, hot reloading, image optimization and the like because there are plenty of other configurations that do all of that jazz. This is perfect for speeding up basic frontend prototyping and mockups.

An alpha version of [Bootstrap 4](http://v4-alpha.getbootstrap.com/) is included *with flexbox enabled*, as well as a basic [Prism.js](http://prismjs.com/) example to demonstrate how custom CSS and additional JS can be included in a working project.

## How do I use this?

It's not hard to get up and running:

1. Install node.js (check the documentation if you need help)
2. Navigate to your project directory and run `npm install`
3. Run `gulp` to do an initial full sweep, and watch changes to your `src` directory

That's about it, open up an issue if you find anything amiss!
