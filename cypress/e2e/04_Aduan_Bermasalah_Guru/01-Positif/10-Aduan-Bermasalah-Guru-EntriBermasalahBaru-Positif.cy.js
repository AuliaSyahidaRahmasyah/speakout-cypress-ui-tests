// describe("Aduan Bermasalah - Guru", () => {
//   it("Tambah Aduan - Entri Bermasalah Baru", () => {
//     cy.login("Guru");
//     cy.wait(3000);

//     cy.get(".list-group > :nth-child(4) > .w-100").click();
//     cy.wait(1000);

//     cy.get('[href="?mod=aduanpelanggaran"]').click();
//     cy.wait(10000);

//     cy.get("#entrimasalah").click();
//     cy.wait(1000);

//     cy.get("#cbosiswa").click();
//     cy.get("#txtcarimaster").type("latif", { delay: 100 });
//     cy.get("a.text-decoration-none").eq(0).click({force: true});
//     cy.wait(2000);
//     cy.get("#info-ok").click();
//     cy.wait(2000);

//     cy.get("#select2-cbojnspelanggaran-container").click();
//     cy.get(".select2-search__field").type("bullying{enter}");

//     cy.wait(2000);

//     cy.get("#txtket").type(20);
//     cy.get("txtfoto").click();

//     const filePath = "images/foto.png"; // path dari folder cypress/fixtures

//     cy.get('input[type="file"]').attachFile(filePath);


//     cy.get("#btnconfirm").click()
//     cy.get("btnSave").click()
//   });
// });
