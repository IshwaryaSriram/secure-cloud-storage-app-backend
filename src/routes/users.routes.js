const express = require('express');

const upload = require('../middlewares/fileupload.middlewares');
const handleFileUpload = require('../controllers/fileupload.controllers');
const router = express.Router(); 

router.post('/upload', upload.single('file'), handleFileUpload.fileUpload);
//TODO handle multiple uploads

module.exports = router