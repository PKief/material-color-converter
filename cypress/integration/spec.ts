describe('When application page is loaded it', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has app title', () => {
    cy.contains('Material Color Converter');
  });

  it('shows required error message if color value is undefined', () => {
    cy.get('input#color-input').clear().blur();
    cy.get('mat-error#required-error').should('be.visible');
  });

  it('shows invalid error message if color value is invalid', () => {
    cy.get('input#color-input').clear().type('invalid color value').blur();
    cy.get('mat-error#invalid-color-error').should('be.visible');
  });

  it('shows five suggested color values', () => {
    cy.get('input#color-input').clear().type('red').blur();
    cy.get('ol#result-list').find('li').should('have.length', 5);
  });

  it('has selected the first suggested color in the color palette', () => {
    cy.get('input#color-input').clear().type('red').blur();
    cy.get('ol#result-list')
      .find('li')
      .first()
      .find('.color-preview')
      .first()
      .should('have.attr', 'style')
      .and('match', /rgb\(255, 61, 0\)/);

    cy.get('#color-palette-wrapper')
      .find('div[style*="background-color: rgb(255, 61, 0);"]')
      .first()
      .should('have.class', 'selected');
  });

  it('shows color values of selected color as HEX, RGB and HSL', () => {
    cy.get('#color-palette-wrapper')
      .get('.column')
      .first()
      .get('.row')
      .first()
      .click();
    cy.get('input#selected-color-value-hex').should('have.value', '#FFEBEE');
    cy.get('input#selected-color-value-rgb').should(
      'have.value',
      'rgb(255,235,238)'
    );
    cy.get('input#selected-color-value-hsl').should(
      'have.value',
      'hsl(351,100%,96.08%)'
    );
  });
});
