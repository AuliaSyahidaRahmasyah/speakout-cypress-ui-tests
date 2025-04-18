describe("Aduan Kehilangan - Guru", () => {
  it("Entri Kehilangan Baru", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get(".list-group > :nth-child(4) > .w-100").click();
    cy.wait(1000);

    cy.get('[href="?mod=aduankehilangan"]').click();
    cy.wait(10000);

    cy.get("#entrikehilangan").click();
    cy.wait(3000);

    cy.get("#btnconfirm").click();
  });
});
