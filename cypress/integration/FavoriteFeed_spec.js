describe('FavoriteFeed functionality', () => {
  beforeEach(() => {
    cy.intercept('https://api.weather.gov/gridpoints/BOU/54,62/forecast', {fixture: 'noaa-fetch-golden-co'})
    cy.visit('http://localhost:3000/')
    cy.get('.climbing-btn').click()
    cy.get('.heart-btn').first().click()
    cy.get('.activities-container').children('.activity-container').eq(7)
      .find('.heart-btn').click()
    cy.get('.favorites-btn').click()
  })


    it('should route to the favorites page', () => {
      cy.url().should('include', 'favorites')
    })

    it(('should not route to any other route within the application'), () => {
      cy.url().should('not.include', 'Biking')
      cy.url().should('not.include', '/Hiking')
      cy.url().should('not.include', 'Biking')
    })

    it('should render the appropriate elements', () => {
      cy.get('.app-name').contains('RAY')
      cy.get('.bottom-logo')
        .eq(0).contains('CHASING')
      cy.get('.favorites-btn').should('have.attr', 'href').and('include', 'favorites')
      cy.get('.home-btn').should('have.attr', 'href')
      cy.get('.favorites-container').children().should('have.length', 2)
      cy.get('.favorite-card').children().get('.favorite-data')
    })

    it('should remove a favorited trail from the favorites when the remove button is clicked', () => {
      cy.get('.favorite-card').children().get('.favorite-data')
        .get('.remove-favorite-btn').first().click()
      cy.get('h3').should('not.contain', 'Tiers of Zion')
      cy.get('h3').should('contain', 'Unaweep Canyon')
    })

    it('should keep all favorited trails/climbing areas in the favorites feed when the favorites feed is exited and then revistited', () => {
      cy.get('.favorite-card').children().get('.favorite-data')
        .get('.remove-favorite-btn').first().click()
      cy.get('h3').should('not.contain', 'Tiers of Zion')
      cy.get('h3').should('contain', 'Unaweep Canyon')
      cy.get('.home-btn').click()
      cy.get('.favorites-btn').click()
      cy.get('h3').should('contain', 'Unaweep Canyon')
    })
});
