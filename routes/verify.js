const express = require('express')
const fs = require('fs')
const router = express.Router()
const multer = require('multer')
const unzipper = require('unzipper')
const parseString = require('xml2js').parseString

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'tmp_uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.zip')
    }
})

var upload = multer({ storage: storage })

router.post('/uploadfile', upload.single('aadhaarXML'), (req, res, next) => {
    const file = req.file
    const { sharecode } = req.body;
    //console.log(sharecode)

    if (!file || !sharecode) {
      const error = new Error('Please upload aadhaarXML file along with Share Code')
      error.httpStatusCode = 400
      return next(error)
    }    

    (async () => {
        try {
            const directory = await unzipper.Open.file(file.destination + '/' + file.filename);
            const extracted = await directory.files[0].buffer(sharecode);
            // If the extracted entity is a file,
            // converting the extracted buffer to string would print the file content
            //console.log(extracted.toString());
            var xml = extracted.toString();
            
            parseString(xml, function (err, result) {
                return res.json(result);
            });

        } catch(e) {
          console.log(e);
        }
      })();

})

module.exports = router

