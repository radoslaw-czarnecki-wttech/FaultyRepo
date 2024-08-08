const express = require('express');
const app = express();

app.get('/', function(req, res) {
  let userName = req.query.userName;

  // BAD: Directly using user input without any validation or sanitization.
  res.send('Hello ' + userName);
});

app.listen(3000);
