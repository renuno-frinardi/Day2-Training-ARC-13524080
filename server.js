const express = require('express');
const path = require('path');

const app = express();
const pagesPath = path.join(__dirname,'public/pages/');

app.get('/', (req, res) => {
  res.sendFile(pagesPath + 'index.html');
});

app.listen(5005, () => {
  console.log('Server listening on port 5005');
});