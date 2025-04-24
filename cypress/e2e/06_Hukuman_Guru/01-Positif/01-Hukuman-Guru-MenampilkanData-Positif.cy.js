describe("Hukuman- Guru", () => {
  it("Menampilkan Data Hukuman", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get('[href="?mod=hukuman"] > .w-100').click();
    cy.wait(1000);


  });
});
