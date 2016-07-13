const express = require('express');
const _ = require('lodash');

const app = express();
const config = require('./server/config/config')['development'];

require('./server/config/express')(app, config.rootPath);
require('./server/config/mongoose')(config.db);

app.listen(config.port);