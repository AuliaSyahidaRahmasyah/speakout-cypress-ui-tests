describe("Dashboard Guru", () => {
  it("Download Sheet Berhasil", () => {
    cy.login("Guru");

    cy.contains("a", "Dashboard").click();

    cy.wait(10000);

    cy.get("button").contains("Unduh Data").click();
    cy.wait(2000);
  });
});
