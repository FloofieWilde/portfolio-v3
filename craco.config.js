const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        baseUrl: "./src",
        aliases: {
          "@components": "./src/components",
          "@assets": "./src/assets",
          "@imgs/*": "./src/assets/imgs/",
          "@icons/*": "./src/assets/icons/"
        }
      }
    }
  ]
};