describe("Aduan Kehilangan - Guru", () => {
  it("Ubah Status Sudah Ditemukan", () => {
    cy.login("Guru");
    cy.wait(3000);

    cy.get(".list-group > :nth-child(4) > .w-100").click();
    cy.wait(1000);

    cy.get('[href="?mod=aduankehilangan"]').click();
    cy.wait(10000);

    cy.get("a.text-decoration-none").contains("Sudah Ketemu").eq(0).click();
    cy.wait(1000);
    
    cy.get("#btnKetemu").click()
  });
});
