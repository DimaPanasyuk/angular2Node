const Folder = require('../models/folder.model');

module.exports.getAllFolders = (req, res, next) => {
  Folder.find({}).exec((err, folders) => {
      res.send({
        status: true,
        folders: folders
      });
  });
};

module.exports.getFolderById = (req, res, next) => {
  Folder.findOne({_id: req.params.id}).exec((err, folder) => {
    if (folder) {
      res.send({
        status: true,
        folder: folder
      });
    } else {
      res.send({
        status: false,
        error: 'No folder with such id!'
      });
    }
  });
};

module.exports.deleteFolderById = (req, res, next) => {
  Folder.remove({_id: req.params.id}).exec((err, folder) => {
    if (err) {
      res.send({
        status: false,
        error: 'some error occured'
      });
    } else {
      res.send({
        status: true
      });
    }
  });
};

module.exports.createNewFolder = (req, res, next) => {
  Folder.create(req.body, (err, folder) => {
    if (err) {
      res.send({
        status: false,
        error: 'Error occured while creating folder'
      });
    }
    if (folder) {
      res.send({
        status: true,
        folder: folder
      });
    }
  });
};

module.exports.checkIfFolderExists = (req, res, next) => {
  console.log(req.body);
  Folder.findOne({name: req.body.name}).exec((err, folder) => {
    if (folder) {
      res.send({
        status: false,
        error: 'Folder with such name exists'
      });
    } else {
      next();
    }
  });
};