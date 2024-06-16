const handleFileUpload =  (req, res) => {  
    console.log("uploading file");
    if (req.file == undefined) {
      res.status(400).send('No file selected!');
    } else {
      res.status(200).send(`File uploaded: ${req.file.filename}`);
    }
}
module.exports = {
    handleFileUpload
};