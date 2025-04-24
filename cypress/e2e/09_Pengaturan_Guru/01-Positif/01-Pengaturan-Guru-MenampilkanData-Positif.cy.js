describe("Pengaturan- Guru", () => {
  it("Menampilkan Data Pengaturan", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get(':nth-child(11) > .w-100').click();
    cy.get('[href="?mod=setuser"] > .w-100').click();
    cy.wait(1000);


  });
});
