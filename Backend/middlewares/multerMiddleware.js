// import multer from "multer";
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../upload")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
 const upload = multer({ 
    storage, 
});
module.exports = {
  upload
}