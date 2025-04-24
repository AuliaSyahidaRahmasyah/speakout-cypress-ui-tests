describe("Hukuman- Guru", () => {
  it("Memberi Hukuman untuk siswa bermasalah tanpa data", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get('[href="?mod=hukuman"] > .w-100').click();
    cy.wait(1000);

    cy.get("#cbostatusx").select(1);
    cy.get(":nth-child(8) > .text-decoration-none").eq(0).click();
    cy.wait(1000);

    // cy.get("#txtkethukuman").type("menyapu sekolah");
    cy.get("#btnconfirm").click();
  });
});
