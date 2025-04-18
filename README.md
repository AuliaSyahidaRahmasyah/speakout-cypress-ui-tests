# Cypress Automation Portfolio – SpeakOut Project

This repository contains automation test scripts created using **Cypress** as part of my personal portfolio and **final school project (Tugas Akhir Sekolah)**.

The project tested here is called **SpeakOut**, a web-based guidance counseling (BK) service platform developed for schools. Automation tests were written to validate key functionalities of the platform using Cypress.

---

## 🎯 Project Overview

**SpeakOut** is a digital platform designed to assist school counseling services (BK Sekolah). It allows students to submit guidance requests, view counseling schedules, and interact with school counselors efficiently.

---

## 🛠️ Tools & Tech Stack

- **Cypress** for end-to-end testing
- **JavaScript**
- **Node.js**

---

## 🧪 Test Coverage

This Cypress automation project covers:

- ✅ Login functionality (Guru & Siswa)
- ✅ Dashboard data download (success & failed)
- ✅ Handling user reports (Aduan Bermasalah & Kehilangan)
- ✅ Form submissions with validation (Hukuman, Ceritain, Edukasi)
- ✅ CRUD operations on Guru profiles
- ✅ File upload & export (Excel, Print)

---





## 🚀 Cara Menjalankan Cypress
Install dependensi
npm install

Jalankan Cypress secara GUI (mode visual):
npx cypress open

Atau jalankan dalam mode CLI (headless, cocok untuk CI/CD):
npx cypress run

## 📦 Dependensi Wajib
Tambahkan ke package.json jika belum:
npm install --save-dev cypress

## 📦 Install Allure Adapter (MMISTY Version)
npm install --save-dev @mmisty/cypress-allure-adapter

## 📸 Untuk Upload File Otomatis (Opsional)
Jika butuh fitur upload file (seperti foto):
npm install --save-dev cypress-file-upload

Lalu di cypress/support/commands.js tambahkan:
import 'cypress-file-upload';

## 🧪 Struktur Test
cypress/fixtures/ – Data dummy (misalnya JSON, foto, dll)
cypress/integration/ – Berisi file test .cy.js
cypress/support/ – Setup perintah custom dan konfigurasi umum

