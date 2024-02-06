// server.js
const express = require('express');
const path = require('path'); // Node.js module for working with file paths
const app = express();
const port = 3000;
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // Send the 'index.html' file
  // res.send('This is the Welcome to my website Homepage.');
  res.sendFile(path.join(__dirname, 'public', 'navBar.html'));
});

app.get('/calculator', (req, res) => {
  // Send the 'index.html' file
  res.sendFile(path.join(__dirname, 'public', 'calculator.html'));
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/clock', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'digitalclock.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
