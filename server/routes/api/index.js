'use strict';

const router = require('express').Router(); // eslint-disable-line new-cap
const models = require('../../db/models');
const Photos = models.Photos
const FileReader = require('filereader')
const reader = new FileReader();
const blobUtil = require('blob-util')

const window = this;


router.get('/images', (req, res, next) => {
  Photos.findAll()
  .then(allPhotos => {
    console.log('here is the blob', allPhotos[0])

    res.send(allPhotos[0])
  })
  .catch(next)
});

module.exports = router;
