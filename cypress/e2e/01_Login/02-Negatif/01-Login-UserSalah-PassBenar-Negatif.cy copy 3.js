describe('Login', () => {
  it('Username Salah Password Benar ', () => {
    cy.login("Salah", "Siswa");
    });
})