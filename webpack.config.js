const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const mfConfig = withModuleFederationPlugin({
  name: "poc-provider",

  exposes: {
    "./routes": "./src/app/app.routes.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
// liberar cors
mfConfig.devServer = {
  port: 4203,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS,HEAD",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
};

module.exports = mfConfig;
