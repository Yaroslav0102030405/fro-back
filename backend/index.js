const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server starting of port ${PORT}`);
});

app.get('/api', (req, res) => {
  res.json({ message: 'Backend express.js' });
});
