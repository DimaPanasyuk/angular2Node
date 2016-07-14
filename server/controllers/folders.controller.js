const Folder = require('../models/folder.model');
const Letter = require('../models/letter.model');
const _ = require('lodash');

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
  var sourceId = req.params.id;
  var destinationId = req.body.destinationId;
  var lettersIds = req.body.lettersIds;

  Folder.findOne({_id: sourceId}).exec((err, folder) => {
    if (err) { console.log(err); }
    _.pull(folder.letters, lettersIds);
    Folder.update({_id: sourceId}, {$set: {'letters': folder.letters}}, (err) => {
      if (err) { console.log(`error while removing letters ${err}`); }
      Folder.update({_id: destinationId}, {$pushAll: {'letters': lettersIds}}, (err) => {
        if (err) { 
          console.log (err);
          res.send({
            status: false,
            error: 'letters movement error'
          }); 
        }
        else {
          res.send({
            status: true,
            folder: folder
          });
        }
      });
    });
  });
};