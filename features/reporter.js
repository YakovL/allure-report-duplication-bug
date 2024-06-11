const AllureCucumberReporter = require("allure-cucumberjs/reporter");
const { AllureRuntime } = require("allure-cucumberjs");
const path = require("path");

class Reporter extends AllureCucumberReporter {
  // constructor(options) {
  //   super(
  //     options,
  //     new AllureRuntime({
  //       resultsDir: path.resolve(__dirname, "allure-results"),
  //     }),
  //     {},
  //   );
  // }
}

module.exports = Reporter;