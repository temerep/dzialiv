require("dotenv").config();
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000

const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'out')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'))
});

app.listen(PORT);