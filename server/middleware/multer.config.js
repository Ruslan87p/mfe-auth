const multer = require('multer');

const types = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = types[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image');

// * multer  is a file-handling package.
// * Multer's  diskStorage()  sets up the destination path and filename for incoming files.
// * Multer's  single()  method creates middleware which captures single files of the type passed as an argument and uses the set storage method to save it to the server's filesystem.