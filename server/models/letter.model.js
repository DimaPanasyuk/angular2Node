const mongoose = require('mongoose');

const letterSchema = mongoose.Schema({
  _folder: {type: mongoose.Schema.Types.ObjectId, ref: 'Folder'},
  title: String,
  body: String,
  sender: Object,
  date: Number,
  selected: Boolean
});

module.exports = mongoose.model('Letter', letterSchema);