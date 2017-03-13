'use strict';

const api = require('./api');
const router = require('express').Router(); // eslint-disable-line new-cap
const models = require('../db/models');
const Photos = models.Photos
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ dest: '../../uploads' })
const paths = require('path')
const fs = require('fs')

let imageNumber = 0;

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/uploads', function (req, res) {
    res.sendFile(paths.resolve('./uploads/image.jpeg'));
});


router.post('/uploads', upload.single('photo'), (req, res, next) => {
  console.log('here is req.file.path', req.file.path)
  console.log('imagenumber', imageNumber)
  imageNumber++;
  const tempPath = req.file.path;
  const targetPath = paths.resolve(`./public/image${imageNumber}.jpeg`);

      fs.rename(tempPath, targetPath, function(err) {
          if (err) throw err;
          console.log("Upload completed!");
          res.redirect('/')
    })
  })



// router.post('/upload', (req, res, next) => {
//
//   console.log('here is the req', req)
//
//   const tempPath = req.file.path;
//   const targetPath = path.resolve('./uploads/image.png');
//   if (path.extname(req.files.file.name).toLowerCase() === '.jpeg') {
//       fs.rename(tempPath, targetPath, function(err) {
//           if (err) throw err;
//           console.log("Upload completed!");
//       });
//   } else {
//       fs.unlink(tempPath, function () {
//           if (err) throw err;
//           console.error("Only .png files are allowed!");
//       });
//   }
//   //
//   // Photos.create({url: req.file.buffer.toString('base64')})
//   // .then(function(base64Img){
//   //   console.log('hi in .then')
//   //   res.json(base64Img.url)
//   // })
//   // .catch(next)
// });



router.use('/api', api);

module.exports = router;
