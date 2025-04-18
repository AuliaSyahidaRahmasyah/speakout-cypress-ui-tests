describe("Aduan Bermasalah - Guru", () => {
  it("Menerima aduan (setujui)", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get(".list-group > :nth-child(4) > .w-100").click();
    cy.wait(1000);

    cy.get('[href="?mod=aduanpelanggaran"]').click();
    cy.wait(20000);

    cy.contains('a', 'Setujui').should('be.visible').click();
    cy.wait(5000);

    cy.get('#btnSetuju').click()
  });
});
