const mongoose = require('mongoose');
const Folder = require('../models/folder.model');
const Letter = require('../models/letter.model');
module.exports = (url) => {
  mongoose.connect(url);
  const db = mongoose.connection;
  
  db.on('open', (data) => {
    console.log('Mongoose is ready, captain!');
  });
  db.on('error', (err) => {
    console.log(err);
  });

  // Will mock folders
  (() => {
    Folder.find({}).exec((err, folders) => {
      //if (!folders.length) {
        Folder.create({name: 'Inbox', tag: 'inbox', immutable: true}, (err, folder) => {
          Letter.create({title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false, _folder: folder._id});
        });
        Folder.create({name: 'Sended', tag: 'send', immutable: true, letters: []});
        Folder.create({name: 'Deleted', tag: 'trash', immutable: true, letters: []});
      //}
    });
  })();
};