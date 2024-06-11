const path = require("path");

module.exports = {
  default: {
    format: ['"file://' + path.resolve(__dirname, "features/reporter.js") + '"'],
  },
};