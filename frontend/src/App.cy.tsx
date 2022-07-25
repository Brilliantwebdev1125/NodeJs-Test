import { mount } from '@cypress/react';
import App from './App';

describe('<App>', () => {
  before('mounts', () => {
    mount(<App />)
  })

  it('5 + 3 = 8', () => {
    cy.get('input#first').type('5');
    cy.get('input#second').type('3');

    cy.get('button').click();

    cy.get('input#sum').should('have.value', 8);
  })

  it('5 + -3 = 2', () => {
    cy.get('input#first').type('5');
    cy.get('input#second').type('-3');

    cy.get('button').click();

    cy.get('input#sum').should('have.value', 2);
  })
})