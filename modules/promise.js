/*
 * FILE: modules/promise.js
 * PERAN: "Dapur" atau "Ahli"
 * Tugasnya adalah melakukan semua logika bisnis.
 */

// FUNGSI 1: Logika untuk login (sekarang dengan password)
const loginUserPromise = (username, password) => {
  console.log('promise.js: Memeriksa username & password...');
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Logika bisnis ada di sini
      if (username === 'admin' && password === '123') {
        resolve({ status: 'success', user: 'admin' });
      } else {
        reject(new Error('Username atau Password salah'));
      }
    }, 500); // Simulasi waktu tunggu
  });
};

// FUNGSI 2: Logika untuk buat key
const generateKeyPromise = (user) => {
  console.log('promise.js: Membuat key...');
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'admin') {
        const key = 'KEY-PROMISE-888'; // Key dari file promise
        resolve(key);
      } else {
        reject(new Error('User tidak valid untuk generate key'));
      }
    }, 500);
  });
};

// FUNGSI 3: Logika untuk ambil laporan
const getReportPromise = (key) => {
  console.log('promise.js: Mengambil laporan dengan key...');
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (key === 'KEY-PROMISE-888') {
        const report = { penghasilan: 'Rp 75.000.000' };
        resolve(report);
      } else {
        reject(new Error('Key salah, tidak bisa ambil laporan'));
      }
    }, 500);
  });
};

// PENTING: Ekspor semua fungsi "ahli" ini
module.exports = {
  loginUserPromise,
  generateKeyPromise,
  getReportPromise
};