describe("Hukuman- Guru", () => {
  it("Siswa bermasalah telah menyelesaikan hukuman", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get('[href="?mod=hukuman"] > .w-100').click();
    cy.wait(1000);

    cy.get("#cbostatusx").select(2);
    cy.get("[onclick=\"selesaihukuman('ADN00021')\"]").eq(0).click({force: true});
  });
});
