describe('Login', () => {
  it('Username Benar Password Salah', () => {
    cy.login("Siswa", "Salah");
    });
})