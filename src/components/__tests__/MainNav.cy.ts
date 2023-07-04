import MainNav from '../MainNav.vue';

// TODO: Working test
describe('MainNav', () => {
  it('playground', () => {
    cy.mount(MainNav, { props: { msg: 'Hello Cypress' } });
  });

  it('renders properly', () => {
    cy.mount(MainNav, { props: { msg: 'Hello Cypress' } });
    cy.get('h1').should('contain', 'Hello Cypress');
  });
});
