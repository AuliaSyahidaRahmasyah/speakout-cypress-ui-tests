describe("Aduan Bermasalah - Guru", () => {
  it("Menolak aduan tanpa Keterangan (Tolak)", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get(".list-group > :nth-child(4) > .w-100").click();
    cy.wait(1000);

    cy.get('[href="?mod=aduanpelanggaran"]').click();
    cy.wait(20000);

    cy.contains("a", "Tolak").should("be.visible").click();
    cy.wait(5000);

    // semestinya muncul validasi tapi tidak muncul:
    cy.contains("Keterangan wajib diisi").should("not.exist");

    cy.get("#btnTolak").click();
  });
});
