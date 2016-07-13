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