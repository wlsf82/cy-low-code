describe('Emoji Mart', () => {
  beforeEach(() => cy.visit('/'))

  it('goes through the whole checkout process successfully', () => {
    cy.get('input[placeholder="Search emojis..."]').type('rocket')
    cy.contains('button', 'Add to Cart').click()

    cy.get('header svg.lucide-shopping-cart').click()

    cy.contains('Total:').should('be.visible')
    cy.contains('$6.99').should('be.visible')

    cy.get('svg.lucide-plus-circle').click()

    cy.contains('$13.98').should('be.visible')

    cy.contains('button', 'Proceed to Checkout').click()

    cy.get('#email').type('user@email.com')
    cy.get('#name').type('User, Test')

    cy.get('#address').type('ABC Street')
    cy.get('#city').type('Zumba')
    cy.get('#country').type('Yeye')

    cy.get('#cardNumber').type('4242424242424242')
    cy.get('#expiryDate').type('1230')
    cy.get('#cvv').type('123')

    cy.contains('Total Amount:').should('be.visible')
    cy.contains('$13.98').should('be.visible')

    cy.contains('button', 'Complete Purchase').click()

    cy.contains('h1', 'Thank You for Your Purchase!').should('be.visible')
    cy.contains('p', 'Your order has been successfully placed. We\'ve sent a confirmation email with your order details.')
      .should('be.visible')
    cy.contains('p', 'Order Number').should('be.visible')
    cy.get('p.font-semibold')
      .should('be.visible')
      .invoke('text')
      .its('length')
      .should('be.eq', 8)
    cy.contains('button', 'Back to Store')
      .should('be.visible')
      .and('be.enabled')
  })
})
