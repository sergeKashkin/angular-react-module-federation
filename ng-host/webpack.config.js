const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "Host",
  },
  // plugins: [
  //   new ModuleFederationPlugin({
  //     remotes: {
  //       childReact: "http://localhost:3000/moduleEntry.js",
  //     },
  //     shared: ["@angular/core", "@angular/common", "@angular/router"],
  //   }),
  // ],
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
};
