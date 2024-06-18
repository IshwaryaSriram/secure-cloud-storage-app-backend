const mongoose  = require("mongoose");

const fileSchema = new mongoose.Schema({
    fileName: {
      type: String,  
    },
    uniqueFileName:{ 
      type: String
    }, 
    mimeType:  {
      type: String
    }, 
    size: { 
      type: Number
    },
    storagePath: {
      type: String
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });
  
const File = mongoose.model('File', fileSchema);

module.exports = {File};


  