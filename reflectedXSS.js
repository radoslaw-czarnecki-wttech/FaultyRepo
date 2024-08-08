let express = require('express');
let app = express();

app.get('/some/path', function(req, res) {
  let username = req.query.username;
  res.send('Hello ' + username);
});
