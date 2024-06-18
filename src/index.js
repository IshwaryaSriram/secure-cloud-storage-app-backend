const express = require('express');
const multer  = require('multer');
const cors = require('cors');
const mongoose = require("mongoose");
const configs = require("dotenv").config();

const app = express();
app.use(cors());

const userRoutes = require('./routes/users.routes');

app.use('/users', userRoutes);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});


mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});


module.exports = app;