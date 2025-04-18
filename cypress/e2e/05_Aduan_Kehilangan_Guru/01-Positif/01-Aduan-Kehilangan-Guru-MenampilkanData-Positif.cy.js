describe("Aduan Kehilangan - Guru", () => {
  it("Menampilkan Data Detail Aduan Kehilangan", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get('.list-group > :nth-child(4) > .w-100').click();
    cy.wait(1000);

    cy.get('[href="?mod=aduankehilangan"]').click();
    cy.wait(10000);

  });
});
