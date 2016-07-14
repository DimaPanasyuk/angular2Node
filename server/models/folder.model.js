const mongoose = require('mongoose');

const folderSchema = mongoose.Schema({
  name: String,
  letters: [{type: mongoose.Schema.Types.ObjectId, ref: 'Letter'}],
  immutable: Boolean,
  tag: String
});

module.exports = mongoose.model('Folder', folderSchema);