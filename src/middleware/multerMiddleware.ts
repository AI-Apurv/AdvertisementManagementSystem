import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req:any, file:any, cb:any) {
      cb(null, 'uploads');
    },
    filename: function (req:any, file:any, cb:any) {
      cb(null, file.originalname);
      //console.log(file.originalname)
    },
  });
  
  // Create a multer instance with the storage options
const upload = multer({ storage });
export { upload };