const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development"
};
