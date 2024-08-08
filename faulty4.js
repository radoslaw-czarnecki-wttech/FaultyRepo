const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function(req, res) {
  // BAD: Use of eval can lead to Remote Code Execution (RCE)
  let result = eval(req.query.userInput);

  // BAD: This could allow a malicious user to inject arbitrary HTML into the page.
  res.send('<html><body>Result: ' + result + '</body></html>');
});

app.get('/file', function(req, res) {
  // BAD: This could allow a malicious user to read any file on the system.
  let fileName = req.query.fileName;
  fs.readFile(fileName, 'utf8', function(err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.listen(3000);
