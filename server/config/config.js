const path = require('path');
const rootPath = path.resolve(__dirname, `../../`);

module.exports = {
  development: {
    port: 3000,
    db: 'mongodb://localhost/mailer',
    rootPath: rootPath
  },
  production: {
    port: 3000,
    db: '',
    rootPath: rootPath
  }
};