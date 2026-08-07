describe('Portfolio site', () => {
  it('loads the homepage with the engineer identity', () => {
    cy.visit('/')
    cy.contains('h1', 'EMMANUEL JOHN')
    cy.contains('Full-Stack Software Engineer')
  })

  it('navigates to Portfolio and shows real projects', () => {
    cy.visit('/portfolio')
    cy.contains('h1', 'PORTFOLIO')
    cy.contains('Ghana Births & Deaths Registry')
    cy.contains('Kedebah ERP System')
    cy.contains('HubConnect Mobile')
  })

  it('filters projects by category', () => {
    cy.visit('/portfolio')
    cy.contains('button', 'Mobile').click()
    cy.contains('HubConnect Mobile')
    cy.contains('Ghana Knowledge and Skills Bank').should('not.exist')
  })

  it('opens a project modal with details', () => {
    cy.visit('/portfolio')
    cy.contains('Kedebah ERP System').click()
    cy.contains('// description')
    cy.contains('Multi-tenant ERP with loosely coupled module APIs')
  })

  it('navigates to About and shows CV-aligned content', () => {
    cy.visit('/about')
    cy.contains('h1', 'ABOUT')
    cy.contains('Spring Boot')
    cy.contains('.NET Core')
  })

  it('navigates to Contact and shows X instead of Twitter label', () => {
    cy.visit('/contact')
    cy.contains('h1', 'CONTACT ME')
    cy.contains('X (Twitter)')
    cy.contains('johnayarmahe@gmail.com')
  })
})
