const Folder = require('../models/folder.model');
const Letter = require('../models/letter.model');

module.exports.getAllFolders = (req, res, next) => {
  Folder.find({}).exec((err, folders) => {
      res.send({
        status: true,
        folders: folders
      });
  });
};

module.exports.getFolderById = (req, res, next) => {
  Folder
  .findOne({_id: req.params.id})
  .populate('letters')
  .exec((err, folder) => {
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
  var folder = {
    name: req.body.name,
    letters: req.body.letters,
    tag: req.body.tag,
    immutable: req.body.immutable
  };
  Folder.create(folder, (err, folder) => {
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
  Folder
  .findOne({name: req.body.name})
  .exec((err, folder) => {
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

module.exports.moveLetters = (req, res, next) => {
  Letter
  .findOne({title: 'someletter'})
  .populate('_folder')
  .exec((err, letter) => {
    if (err) { console.log(err); }
    res.send({
      status: true,
      folder: letter._folder.tag
      //sendedIds: req.params.letterIds
    });
  });
};