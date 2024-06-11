const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { sum } = require('../../src/sum')

When('1 and 1 are passed to sum', function () {
    this.sumResult = sum(1, 1)
});
  
Then('result is 2', function () {
    assert.equal(this.sumResult, 2)
});
