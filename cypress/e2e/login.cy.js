/**
 * - Login spec
 *    - should display login page correctly
 *    - should display alert when email is empty
 *    - should display alert when email not valid
 *    - should display alert when password is empty
 *    - should display alert when email and password are wrong
 *    - should display homepage when email and password are correct
*/

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    // verify element that must be seen on login page
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // click login button without fill in the email
    cy.get('button').contains(/^Login$/).click();

    // verify window.alert to display message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when email not valid', () => {
    // fill in email
    cy.get('input[placeholder="Email"]').type('testuser');

    // push login button
    cy.get('button').contains(/^Login$/).click();

    // verify window.alert to display message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should display alert when password is empty', () => {
    // fill in email
    cy.get('input[placeholder="Email"]').type('testuser@gmail.com');

    // click login button without fill in password
    cy.get('button').contains(/^Login$/).click();

    // verify window.alert to display message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    // fill in email
    cy.get('input[placeholder="Email"]').type('testuser@gmail.com');

    // fill in wrong password
    cy.get('input[placeholder="Password"]').type('wrong password');

    // push login button
    cy.get('button').contains(/^Login$/).click();

    // verify window.alert to display message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // fill in email
    cy.get('input[placeholder="Email"]').type('ekorahy@gmail.com');

    // fill in password
    cy.get('input[placeholder="Password"]').type('mawar104');

    // push login button
    cy.get('button').contains(/^Login$/).click();

    // verify that element is located in homepage is displayed
    cy.get('nav').contains(/^Threads$/).should('be.visible');
    cy.get('nav').contains(/^Leaderboards$/).should('be.visible');
  });
});
