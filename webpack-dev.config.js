const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["env"], plugins: ["transform-class-properties"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader',
        },
      {
        test: /\.(png|jpg|jpeg|gif|svg|pdf)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3001,
    publicPath: "http://localhost:3001/dist"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
