// This library allows us to combine paths easily
const path = require("path");
module.exports = {
   entry: path.resolve(__dirname, "src", "queryStringToJSON.js"),
   output: {
      path: path.resolve(__dirname, "lib"),
      filename: "index.js",
      libraryTarget: "umd"
   },
   resolve: {
      extensions: [".js"]
   }
};
