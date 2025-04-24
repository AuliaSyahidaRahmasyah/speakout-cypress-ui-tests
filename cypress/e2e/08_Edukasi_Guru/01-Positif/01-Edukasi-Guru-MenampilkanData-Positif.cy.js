describe("Edukasi- Guru", () => {
  it("Menampilkan Data Edukasi", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get('[href="?mod=edukasi"] > .w-100').click();
    cy.wait(1000);


  });
});
