const mongoose = require('mongoose');
const Folder = require('../models/folder.model');

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
      if (!folders.length) {
        Folder.create({name: 'Inbox', tag: 'inbox', letters: [
          {id: 1, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
          {id: 2, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
          {id: 3, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false}
        ]});
        Folder.create({name: 'Sended', tag: 'send', letters: [
            {id: 1, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
            {id: 2, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false}
          ]
        });
        Folder.create({name: 'Important', tag: 'certificate', letters: [
          {id: 5, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
          {id: 6, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
          {id: 2, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
          {id: 234, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
          {id: 12, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
          {id: 3, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false}
        ]});
      }
    });
  })();
};