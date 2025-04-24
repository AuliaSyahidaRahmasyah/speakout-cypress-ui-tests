describe("CeritaIn- Guru", () => {
  it("Menampilkan Data CeritaIn", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get('[href="?mod=ceritain"] > .w-100').click();
    cy.wait(1000);


  });
});
