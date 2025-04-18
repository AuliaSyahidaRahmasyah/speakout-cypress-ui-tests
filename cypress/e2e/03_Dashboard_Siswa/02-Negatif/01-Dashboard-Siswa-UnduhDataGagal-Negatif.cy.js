describe("Dashboard Siswa", () => {
  it("Download Sheet Berhasil", () => {
    cy.login("Siswa");

    // cy.contains("a", "Dashboard").click();

    cy.wait(10000);

    cy.get("button").contains("Unduh Data").click();
    cy.wait(2000);
  });
});
