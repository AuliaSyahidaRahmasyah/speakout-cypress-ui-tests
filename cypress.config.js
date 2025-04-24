const { defineConfig } = require("cypress");
const { readFileSync } = require("fs");
const {
  configureAllureAdapterPlugins,
} = require("@mmisty/cypress-allure-adapter/plugins");

const packageVersion = (packagename) => {
  try {
    const versions = JSON.parse(readFileSync("package-lock.json"));
    return versions["packages"]?.[`node_modules/${packagename}`]?.["version"];
  } catch (e) {
    return "could not get allure adapter version";
  }
};

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://speakout.azhaf.cloud",
    chromeWebSecurity: false,
    screenshotOnRunFailure: false,
    video: true,
    videoCompression: 32,
    defaultCommandTimeout: 90000,
    pageLoadTimeout: 90000,
    requestTimeout: 90000,
    responseTimeout: 90000,
    taskTimeout: 90000,
    execTimeout: 90000,
    testIsolation: false,
    cacheAcrossSpecs: true,
    watchForFileChanges: true,
    specPattern: [
      "cypress/e2e/01_Login/**/*.cy.js",
      "cypress/e2e/02_Dashboard_Guru/**/*.cy.js",
      "cypress/e2e/03_Dashboard_Siswa/**/*.cy.js",
      "cypress/e2e/04_Aduan_Bermasalah_Guru/**/*.cy.js",
      "cypress/e2e/05_Aduan_Kehilangan_Guru/**/*.cy.js",
      "cypress/e2e/06_Hukuman_Guru/**/*.cy.js",
      "cypress/e2e/07_CeritaIn_Guru/**/*.cy.js",
      "cypress/e2e/08_Edukasi_Guru/**/*.cy.js",
      "cypress/e2e/09_Pengaturan_Guru/**/*.cy.js",
      // "cypress/support/Commands.js",
    ],
    setupNodeEvents(on, config) {
      const reporter = configureAllureAdapterPlugins(on, config);
      const allureAdapterVersion = packageVersion(
        "@mmisty/cypress-allure-adapter",
      );
      const cypressVersion = packageVersion("cypress");

      on("before:run", (details) => {
        reporter?.writeEnvironmentInfo({
          info: {
            "cypress version": cypressVersion,
            "allure adapter version": allureAdapterVersion,
            os: details.system.osName,
            osVersion: details.system.osVersion,
            browser:
              details.browser?.displayName + " " + details.browser?.version,
          },
        });

        reporter?.writeCategoriesDefinitions({
          categories: "./allure-error-categories.json",
        });

        reporter?.writeExecutorInfo({
          info: {
            name: "Software Quality",
            type: "gitlab",
            buildName: "allure-report",
            buildUrl: "http://10.62.161.7/report/",
          },
        });
      });

      return config;
    },
  },
});
