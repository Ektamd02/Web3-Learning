const crypto = require('crypto');

const input = "Ekta";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)

//Node.js code for generating SHA-256 