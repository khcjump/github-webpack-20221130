const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: "./src/index.js",
  // entry: {
  //   index: "./src/index.js",
  //   print: "./src/print.js",
  // },
  mode: "development",
  // entry: {
  //   index: "./src/index.js",
  //   another: "./src/another-module.js",
  // },
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    another: {
      import: "./src/another-module.js",
      dependOn: "shared",
    },
    shared: "lodash",
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
    //for split chunks plugin
    splitChunks: {
      chunks: "all",
    },
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
