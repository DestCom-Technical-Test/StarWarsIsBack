const path = require("path");

module.exports = {
  // 1
  entry: path.resolve(__dirname, "./assets/js/main.js"),
  // 2
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  // 3
  devServer: {
    static: path.resolve(__dirname, "./"),
  },
};
