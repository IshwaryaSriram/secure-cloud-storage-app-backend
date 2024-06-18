const { File } = require('../models/file.model');

const processFileUpload =  async (req, res) => {  
    console.log("uploading file");
    if (req.file == undefined) {
      res.status(400).send('No file selected!');
    } else {

      try {
        const newFile = new File({
          fileName: req.file.originalname,
          uniqueFileName: req.file.filename,
          size: req.file.size,
          storagePath: req.file.path,
          mimeType: req.file.mimetype
        });
        console.log(newFile);
        const savedFile = await newFile.save();  
        res.status(200).send(`File uploaded: ${req.file.filename}`);  
      } catch (error) {
        res.status(400).send(error);
      }
      
    }
}
module.exports = {
    fileUpload: processFileUpload
};