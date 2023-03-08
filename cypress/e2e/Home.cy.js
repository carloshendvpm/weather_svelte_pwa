describe('Weather App', () => {
  it('should display weather for a city', () => {
    cy.visit('/')

    cy.get('[data-testid="city-input"]').type('London')
    cy.get('[data-testid="submit-button"]').click()
    cy.wait(2000)
    cy.get('[data-testid="city-weather"]').should('contain', 'London')
    cy.contains('London')
    cy.contains('Feels like')
    cy.contains('Humidity')
  })
})