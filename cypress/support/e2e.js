// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("jQuery is not defined")) {
    return false;
  }
});

Cypress.on("uncaught:exception", (err) => {
  if (
    err.message.includes("$(...).idle is not a function") ||
    err.message.includes("Cannot read properties of undefined")
  ) {
    // Abaikan error tersebut agar tidak membuat test gagal
    return false;
  }
});
