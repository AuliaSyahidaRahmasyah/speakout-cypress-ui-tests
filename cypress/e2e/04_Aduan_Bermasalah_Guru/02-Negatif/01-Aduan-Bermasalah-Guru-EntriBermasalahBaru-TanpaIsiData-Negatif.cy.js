describe("Aduan Bermasalah - Guru", () => {
  it("Tambah Aduan - Entri Bermasalah Baru - Tanpa Isi Data", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get(".list-group > :nth-child(4) > .w-100").click();
    cy.wait(1000);

    cy.get('[href="?mod=aduanpelanggaran"]').click();
    cy.wait(10000);

    cy.get("#entrimasalah").click();
    cy.wait(1000);

    cy.get("#cbosiswa").click();
    cy.get("#txtcarimaster").type("latif", { delay: 100 });
    cy.get("a.text-decoration-none").eq(0).click({ force: true });
    cy.wait(2000);
    cy.get("#info-ok").click();
    cy.wait(2000);

    cy.get("#btnconfirm").click();
  });
});
