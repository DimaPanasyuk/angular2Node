const mongoose = require('mongoose');

const folderSchema = mongoose.Schema({
  id: Number,
  name: String,
  letters: [],
  tag: String
});

module.exports = mongoose.model('Folder', folderSchema); 