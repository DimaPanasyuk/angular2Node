const express = require('express');
const foldersRoute = require('../routes/folders.route');

module.exports = function(app, path) {
  app.use(express.static(path));
  app.use('/public', express.static(path));
  app.use('/api/folders', foldersRoute);
  
  app.get('*', (req, res, next) => {
    res.sendFile(`${path}/server/views/index.html`);
  });
};