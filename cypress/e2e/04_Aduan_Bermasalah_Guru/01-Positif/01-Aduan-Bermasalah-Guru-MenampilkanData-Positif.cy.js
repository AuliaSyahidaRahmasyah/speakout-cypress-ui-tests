describe("Aduan Bermasalah - Guru", () => {
  it("Menampilkan Data Detail Aduan Bermasalah", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get('.list-group > :nth-child(4) > .w-100').click();
    cy.wait(1000);

    cy.get('[href="?mod=aduanpelanggaran"]').click();
    cy.wait(10000);

  });
});
