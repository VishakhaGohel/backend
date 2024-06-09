const multer = require('multer');

//set storage engine
const storage = multer.diskStorage({
    destination: 'C:/Users/Vishakha Gohel/Desktop/8th Sem Internship MERN/Raah NGO/backend/images',
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
});

//Initialize multer middleware
const upload = multer({storage: storage});

module.exports = upload;