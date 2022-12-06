const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  //just for development time (not for product env)
  devtool: "inline-source-map",
  //webpack-dev-server-start
  devServer: {
    static: "./dist",
  },
  //webpack-dev-server-end
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],
  output: {
    // filename: "bundle.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  //webpack-dev-server-start
  optimization: {
    runtimeChunk: "single",
  },
  //webpack-dev-server-end
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
