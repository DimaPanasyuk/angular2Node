const express = require('express');
const router = express.Router();
const foldersController = require('../controllers/folders.controller');
const _ = require('lodash');

router.use((req, res, next) => {
  console.log(`${req.method.toUpperCase()} request ----> ${req.url}`);
  next();
});

router.get('/', foldersController.getAllFolders);

router.get('/:id', foldersController.getFolderById);


module.exports = router;