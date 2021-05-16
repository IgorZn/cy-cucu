Feature: Google Main Page

  I want to open a search engine

  @focus
  Scenario: Opening a search engine page
    Given I open "Google" page
    Then I see "Google" in the title

  @focus
  Scenario: Opening a search engine page yandex
    Given I open "yandex.ru" page
    Then I see "Яндекс" in the title