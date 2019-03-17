const express = require('express');
const router = express.Router();

require('./routes/user')(router);
require('./routes/transaction')(router);

module.exports  = router;