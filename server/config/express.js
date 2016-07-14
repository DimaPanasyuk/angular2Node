const express = require('express');
const foldersRoute = require('../routes/folders.route');
const bodyParser = require('body-parser');

module.exports = function(app, path) {
  app.use(bodyParser.urlencoded({ extended: false })); 
  app.use(bodyParser.json());
  app.use(express.static(path));
  app.use('/public', express.static(path));
  app.use('/api/folders', foldersRoute);
  
  app.get('*', (req, res, next) => {
    res.sendFile(`${path}/server/views/index.html`);
  });
};