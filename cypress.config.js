const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 20000,
    baseUrl: "https://demoqa.com/",
    specPattern: "cypress/e2e/features/**/*.feature", 
    blockHosts: [
      '*.criteo.com',
      '*.openx.net',
      '*.rubiconproject.com'
    ],

    setupNodeEvents: async (on, config) => {
      await addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      on("task", {
        "cypress-cucumber-preprocessor:generate-json": () => null,
        "cypress-cucumber-preprocessor:before-spec": () => null,
        "cypress-cucumber-preprocessor:after-spec": () => null,
      });

      return config;
    },
  },
});
