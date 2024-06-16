const express = require('express');
const multer  = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());

const userRoutes = require('./routes/users.routes');

app.use('/users', userRoutes);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

module.exports = app;