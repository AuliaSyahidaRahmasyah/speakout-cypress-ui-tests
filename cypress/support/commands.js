Cypress.Commands.add("login", (usernameRole = "Guru", passwordRole = "Guru") => {
  const env = Cypress.env("environment");
  const loginData = Cypress.env("login");

  const usernameUser = loginData?.[usernameRole];
  const passwordUser = loginData?.[passwordRole];
  const selectors = loginData?.selectors;
  const baseUrl = Cypress.env("baseUrl");

  if (!usernameUser || !passwordUser) {
    throw new Error(`Role "${usernameRole}" atau "${passwordRole}" tidak ditemukan dalam konfigurasi login`);
  }

  cy.session(`${env}-${usernameRole}-${passwordRole}`, () => {
    cy.visit(baseUrl);

    cy.get(selectors.usernameInput).clear();
    if (usernameUser.username) {
      cy.get(selectors.usernameInput).type(usernameUser.username);
    }

    cy.get(selectors.passwordInput).clear();
    if (passwordUser.password) {
      cy.get(selectors.passwordInput).type(passwordUser.password);
    }

    cy.get(selectors.loginButton).click();
    cy.wait(3000);
  });
});


import 'cypress-file-upload';
