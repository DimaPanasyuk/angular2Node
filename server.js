const express = require('express');
const _ = require('lodash');
const app = express();

const folders = [
  {id: 1, name: 'Inbox'},
  {id: 2, name: 'Sended'},
  {id: 3, name: 'Important'}
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
  res.send({
    status: true,
    folder: _.find(folders, {id: req.params.id})
  });
});

app.get('*', (req, res, next) => {
 res.sendFile(`${__dirname}/server/views/index.html`);
});


app.listen(3000);