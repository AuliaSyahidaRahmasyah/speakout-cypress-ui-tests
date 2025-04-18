describe("Dashboard Guru", () => {
  it("Download Sheet Berhasil", () => {
    cy.login("Guru");

    cy.contains("a", "Dashboard").click();

    cy.wait(10000);

    cy.get("#cbothun").select("2025");
    cy.wait(2000);

    cy.get("#select2-cbojurusan-container").click();
    cy.get(".select2-results__option")
      .contains("Teknik Instalasi Tenaga Listrik")
      .click();
    cy.wait(2000);

    cy.get("#cbokelas").select("10");
    cy.wait(2000);

    cy.get("button").contains("Unduh Data").click();
    cy.wait(2000);
  });
});
