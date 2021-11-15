describe('Activity Feed', () => {
  beforeEach(() => {
    cy.intercept('https://api.weather.gov/gridpoints/BOU/49,46/forecast', {fixture: 'noaa-fetch-pine-co'})
    cy.intercept('https://api.weather.gov/gridpoints/BOU/54,62/forecast', {fixture: 'noaa-fetch-golden-co'}).visit('http://localhost:3000/')
    cy.get('.climbing-btn').click()
  })


  it('should render the appropriate elements', () => {
    cy.get('header').find('.nav-container')
  })

  it('should dispaly eight activity-containers', () => {
    cy.get('.activities-container').children().should('have.length', 8)
  })

  it('should show all climbing areas', () => {
    cy.contains('Tiers of Zion')
    cy.contains('Eldorado Canyon')
    cy.contains('Staunton Ranch Trail')
    cy.contains('Wolcott Crags')
    cy.contains('Three Sisters')
    cy.contains('Tenmile Range')
    cy.contains('The Ameristar Boulder')
    cy.contains('Unaweep Canyon')
  })

  it('should display day-cards (weather cards) for each climbing area', () => {
    cy.get('.activities-container').children('.activity-container').eq(2)
      .get('.day-card').eq(1).children().should('have.class', 'weather-img')
    cy.get('.activities-container').children('.activity-container').eq(2)
      .get('.day-card').children().should('have.class', 'short-forecast')
    cy.get('.activities-container').children('.activity-container').eq(7)
      .get('.day-card').eq(2).children().should('have.class', 'date')
      cy.get('.activities-container').children('.activity-container').eq(6)
        .get('.day-card').eq(3).children()
          .get('.date').get('.temperature')
  })
  it('should allow you to favorite a climbing area and see them in your favorites feed', () => {
    cy.get('.heart-btn').first().click()
    cy.get('.activities-container').children('.activity-container').eq(7)
      .find('.heart-btn').click()
    cy.get('.favorites-btn').click()
    cy.contains('Tiers of Zion')
    cy.contains('Unaweep Canyon')
  })

  it('should not allow you to add a climbing area already in your favorites to your favorites again', () => {
    cy.get('.heart-btn').first().click()
    cy.get('.heart-btn').first().click()
    cy.get('.favorites-btn').click()
    cy.get('.favorites-container').should('have.length', 1)
    cy.contains('Tiers of Zion')
  })

  it('should allow you to navigate back to the home page by clicking home', () => {
    cy.get('.home-btn').click()
      .url().should('eq', 'http://localhost:3000/')
  })
});
