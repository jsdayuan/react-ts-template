import baseConfig from "./webpack.base";
import merge from "webpack-merge";
import path from "path";
import "webpack-dev-server";

export default merge(baseConfig, {
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    host: "0.0.0.0",
    port: 3001,
    compress: true,
  },
});
