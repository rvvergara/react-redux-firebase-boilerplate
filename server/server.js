const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, '../build');
const port = process.env.PORT || 8000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(port, () => console.log('Server started'));
