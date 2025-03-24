export const config: WebdriverIO.Config = {
  runner: "local",
  tsConfigPath: "./tsconfig.json",
  port: 4723,
  specs: ["./test/specs/**/*.ts"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 10,

  capabilities: [
    {
      platformName: "Android",
      // browserName: "Chrome",
      "appium:deviceName": "R58X9077QNA",
      "appium:platformVersion": "14",
      "appium:automationName": "UiAutomator2",
      // "appium:automationName": "flutter",
      // "appium:app": "/c/Users/SIMONS~1/Projects/mobile-poc/app-debug.apk",
      "appium:app": "C:\\Users\\SIMONS~1\\Projects\\mobile-poc\\app-debug.apk",
    },
  ],

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",

  bail: 0,

  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: ["appium"],
  framework: "mocha",
  reporters: ["spec", ["allure", { outputDir: "allure-results" }]],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
