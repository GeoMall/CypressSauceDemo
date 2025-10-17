import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    e2e: {
        specPattern: "cypress/e2e/**/*.feature",
        async setupNodeEvents(on, config) {
            // Add the cucumber preprocessor plugin
            console.log(">>> Cucumber preprocessor initialized");
            await addCucumberPreprocessorPlugin(on, config);

            // Use esbuild to compile feature files
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );

            return config;
        },
        baseUrl: "https://www.saucedemo.com/",
    },
    cucumberPreprocessor: {
        stepDefinitions: "cypress/support/step_definitions/**/*.js",
    },
});
