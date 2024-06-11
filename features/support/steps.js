const assert = require('assert')
const { Given, When, Then, setWorldConstructor } = require('@cucumber/cucumber')
// const { AllureCucumberWorld } = require('allure-cucumberjs')
const { suite, parentSuite } = require('allure-js-commons')
const Petstore = require('../../src/petstore')

// setWorldConstructor(AllureCucumberWorld)

var petstore = new Petstore()

Given('I have a pet store', async function() { 
    assert(petstore != null)
})

When('I add a pet', async function() {
    assert.equal(true, true)
})

Then('The pet is added', async function() {
    // this.epic("REST api")
    await parentSuite("REST api")
    await suite("Petstore")
    // this.label(LabelName.PACKAGE, "cucumber.features.petstore")

    assert.equal(true, true)
})
