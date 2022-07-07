import baseConfig from "./webpack.base"
import merge from "webpack-merge"

export default merge(baseConfig, {
  mode:"production"
});
