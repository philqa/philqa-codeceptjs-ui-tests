Feature: Business rules
  In order to document and share experiences about my life
  As a person in the quality assurance and technology space
  I want to be able to write articles and create pages on a personal blog site

  Scenario: visit the homepage
    Given I am viewing the homepage
    When I click the "Home" link
    Then I should see "Quality Assured"
    And I should see "Automation, performance, dev, testing & everything in between"
