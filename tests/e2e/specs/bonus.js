// https://docs.cypress.io/api/introduction/api.html

describe('Mon test bonus', () => {
  it('Adds two items in the cart, checks the cart content, removes cart content, checks if cart is empty', () => {
    cy.visit('/');

    cy.get('[data-cy-addToCart]')
      .first()
      .click()
      .click();

    cy.visit('/cart');

    cy.get('[data-cy-cartProductQty]')
      .first()
      .contains(2);
      
    cy.get('[data-cy-removeCartProduct]')
      .first()
      .click();
    
    cy.get('[data-cy="alertNoProduct"]')
      .contains('Votre panier est vide.')

  });
})