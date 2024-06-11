const assert = require('assert')
const { Given, When, Then, setWorldConstructor } = require('@cucumber/cucumber')
const { CucumberAllureWorld } = require('allure-cucumberjs')
const { LabelName } = require('allure-js-commons')
const Petstore = require('../../src/petstore')

setWorldConstructor(CucumberAllureWorld)

var petstore = new Petstore()

Given('I have a pet store', async function() { 
    assert(petstore != null)
})

When('I add a pet', async function() {
    assert.equal(true, true)
})

Then('The pet is added', async function() {
    // this.epic("REST api")
    this.parentSuite("REST api")
    this.suite("Petstore")
    // this.label(LabelName.PACKAGE, "cucumber.features.petstore")

    assert.equal(true, true)
})
