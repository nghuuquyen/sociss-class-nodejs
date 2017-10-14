"use strict";

const express = require('express');
const app = express();
const port = 3000;

// Do Registration routes.
require('./routes')(app);

app.listen(port, function(err) {
  if(err) {
    console.error('Something error !!');
    console.error(err);
  }

  console.log('App listen on port ' + port);
});
