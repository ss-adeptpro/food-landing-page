//console.log(process.env.NODE_ENV);
module.exports = {
  plugins: {
    "postcss-import": {}, //we can create separate css files and import them
    tailwindcss: {},
    autoprefixer: {},
    "postcss-assets": {}, //to handle images and fonts

    //note: add cssnano to the end of the plugin list
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}), //minify only for production  //development
  },
};
