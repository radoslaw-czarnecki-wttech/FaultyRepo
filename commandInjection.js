let child_process = require('child_process');

let path = req.query.path;
child_process.exec('ls ' + path);
