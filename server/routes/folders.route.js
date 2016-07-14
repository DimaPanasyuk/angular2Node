const express = require('express');
const router = express.Router();
const foldersController = require('../controllers/folders.controller');
const _ = require('lodash');

router.use((req, res, next) => {
  console.log(`${req.method.toUpperCase()} request ----> ${req.url}`);
  next();
});

router.get('/', foldersController.getAllFolders);

router.post('/', foldersController.checkIfFolderExists, foldersController.createNewFolder);

router.get('/:id', foldersController.getFolderById);

router.put('/:id', foldersController.moveLetters);

router.delete('/:id', foldersController.deleteFolderById);

module.exports = router;