const express = require('express');
const path = require('path');
app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log("Listen on port: 3000")
})