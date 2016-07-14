const mongoose = require('mongoose');

const folderSchema = mongoose.Schema({
  id: Number,
  name: String,
  letters: [],
  immutable: Boolean,
  tag: String
});

module.exports = mongoose.model('Folder', folderSchema);