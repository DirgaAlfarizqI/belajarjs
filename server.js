
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const { 
  loginUserPromise, 
  generateKeyPromise, 
  getReportPromise 
} = require('./modules/promise.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Server.js: Menerima request login, meneruskan ke promise.js...');
  
  try {
    const result = await loginUserPromise(username, password);
    res.json({ message: 'Login Berhasil!', user: result.user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/generate-key', async (req, res) => {
  const { user } = req.body;
  console.log('Server.js: Menerima request key, meneruskan ke promise.js...');

  try {
    const key = await generateKeyPromise(user);
    res.json({ message: 'Key tergenerate!', key: key });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/get-report', async (req, res) => {
  const { key } = req.body;
  console.log('Server.js: Menerima request laporan, meneruskan ke promise.js...');
  
  try {
    const report = await getReportPromise(key);
    res.json({ message: 'Laporan berhasil diambil!', data: report });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});