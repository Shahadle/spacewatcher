const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('404');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});