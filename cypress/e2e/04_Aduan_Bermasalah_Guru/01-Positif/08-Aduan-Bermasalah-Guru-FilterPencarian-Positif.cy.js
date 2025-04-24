describe("Aduan Bermasalah - Guru", () => {
  it("Filter pencarian valid", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get(".list-group > :nth-child(4) > .w-100").click();
    cy.wait(1000);

    cy.get('[href="?mod=aduanpelanggaran"]').click();
    cy.wait(10000);

    cy.get("#txtcari").should("be.visible").type("mencuri{enter}");

    // Pilih kelas ke-11 (pastikan value-nya benar)
    cy.get("#cbokelasx").should("be.visible").select("11");

    // Buka dropdown jurusan (Select2)
    cy.get("#select2-cbojurusanx-container").click();
    cy.get("#select2-cbojurusanx-results").find("[id*='JURU0008']").click();

    // Pilih indeks ke-3
    cy.get("#cboindeksx").should("be.visible").select("3");

    // Buka dropdown jenis pelanggaran (Select2)
    cy.get("#select2-cbojnspelanggaranx-container").click();
    cy.get("#select2-cbojnspelanggaranx-results")
      .find("[id*='PLGRN007']")
      .click();

    // Pilih status ke-2
    cy.get("#cbostatusx").should("be.visible").select("2");
  });
});
