Feature: Petstore

  Scenario: Add pet
    Given I have a pet store
    When I add a pet
    Then The pet is added
