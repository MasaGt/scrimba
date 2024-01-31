const path = require("path");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.pack.js",
    clean: {
      keep: /index.html/,
    },
  },
  resolve: {
    alias: {
      Logo: path.resolve(__dirname, "images/airbnb-logo.png"),
    },
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)/,
        type: "asset/inline",
      },
    ],
  },
  entry: path.resolve(__dirname, "index.js"),
};
