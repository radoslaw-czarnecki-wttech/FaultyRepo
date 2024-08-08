const crypto = require('crypto');

function hashPassword(password) {
  // BAD: Using MD5 hash algorithm which is considered insecure
  const hash = crypto.createHash('md5');
  hash.update(password);
  return hash.digest('hex');
}

hashPassword('mySecurePassword');
