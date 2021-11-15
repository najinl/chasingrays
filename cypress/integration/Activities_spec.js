describe('Home landing and Activities', () => {
  beforeEach(() => {
    cy.intercept('https://api.weather.gov/gridpoints/BOU/54,62/forecast', {fixture: 'noaa-fetch-golden-co'})
    cy.intercept('https://api.weather.gov/gridpoints/BOU/46,80/forecast', {fixture: 'noaa-fetch-boulder-co'})
    cy.intercept('https://api.weather.gov/gridpoints/BOU/49,46/forecast', {fixture: 'noaa-fetch-pine-co'}).visit('http://localhost:3000/')
  })


    it('should render the appropriate elements', () => {
      cy.get('.app-name').contains('RAY')
      cy.get('.bottom-logo')
        .eq(0).contains('CHASING')
      cy.get('.favorites-btn').should('have.attr', 'href').and('include', 'favorites')
      cy.get('.home-btn').should('have.attr', 'href')
      cy.contains('Climbing')
      cy.contains('Hiking')
      cy.contains('Mountain Biking')
    })

    it('should direct you to the climbing activity/forecast page when the climbing button is clicked', () => {
      cy.get('.climbing-btn').click()
      cy.url().should('include', '/Climbing')
    })

    it('should direct you to the hiking activity/forecast page when the climbing button is clicked', () => {
      cy.get('.hiking-btn').click()
      cy.url().should('include', '/Hiking')
    })

    it('should direct you to the climbing activity/forecast page when the climbing button is clicked', () => {
      cy.get('.biking-btn').click()
      cy.url().should('include', 'Biking')
    })
});
