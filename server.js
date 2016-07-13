const express = require('express');
const _ = require('lodash');
const app = express();

const folders = [
  {id: 1, name: 'Inbox', tag: 'inbox', letters: [
    {id: 1, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
    {id: 2, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
    {id: 3, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false}
  ]},
  {id: 2, name: 'Sended', tag: 'send', letters: [
    {id: 3, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
    {id: 3, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false}
  ]},
  {id: 3, name: 'Important', tag: 'certificate', letters: [
    {id: 5, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
    {id: 6, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
    {id: 2, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
    {id: 234, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
    {id: 12, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false},
    {id: 3, title: 'someletter', body: 'some text', sender: null, date: 19922379812, selected: false}
  ]}
];

app.use(express.static(`${__dirname}/`));
app.use('/public', express.static(`${__dirname}/public`));

app.get('/api/folders', (req, res, next) => {
  res.send({
    status: true,
    folders: folders
  });
});

app.get('/api/folders/:id', (req, res, next) => {
  var folderId = req.params.id;
  res.send({
    status: true,
    folder: _.find(folders, { id: parseInt(folderId, 10) })
  });
});

app.get('*', (req, res, next) => {
 res.sendFile(`${__dirname}/server/views/index.html`);
});


app.listen(3000);