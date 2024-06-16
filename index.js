const express = require('express');
const multer  = require('multer');
const cors = require('cors');

const app = express();
app.use(cors);
const upload = multer();


app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  console.log(req.file);
  
  res.json({ message: 'File uploaded successfully' });
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
