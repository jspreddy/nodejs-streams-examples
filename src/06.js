import fs from 'fs';

// Transform streams

const { Transform } = require('stream');


// UPPER CASE transform stream.
const capitalizeStream = new Transform({
  transform(chunk, encoding, callback) {
    try {
      callback(false, chunk.toString().toUpperCase());
    } catch (e) {
      callback(e);
    }
  },
});

// read from big.txt
const bigFile = './assets/big.txt';
const readStream = fs.createReadStream(bigFile);


// output to std out.
readStream.pipe(capitalizeStream).pipe(process.stdout);
