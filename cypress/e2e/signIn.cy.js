/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/#/login');

    cy.get('[placeholder="Email"]').type(faker.internet.email());
    cy.get('[placeholder="Password"]').type(faker.internet.password(30));

    cy.get('button').contains('Sign in').should('exist').click();
  });
});
