describe("Aduan Bermasalah - Guru", () => {
  it("Search Kata Kunci Valid", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get(".list-group > :nth-child(4) > .w-100").click();
    cy.wait(1000);

    cy.get('[href="?mod=aduanpelanggaran"]').click();
    cy.wait(10000);

    cy.get("#txtcari").should("be.visible").type("mencuri{enter}");
  });
});
