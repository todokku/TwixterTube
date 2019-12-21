// webpack.config.js
var path = require("path");

module.exports = {
  entry: "./frontend/twixtertube_entry.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/"
            }
          }
        ]
      }
      //   {
      //     test: /\.(gif|png|jpe?g|svg)$/i,
      //     use: [
      //       "file-loader",
      //       {
      //         loader: "image-webpack-loader",
      //         options: {
      //           bypassOnDebug: true, // webpack@1.x
      //           disable: true // webpack@2.x and newer
      //         }
      //       }
      //     ]
      //   }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
