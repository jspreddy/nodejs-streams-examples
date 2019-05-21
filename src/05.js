// Example taken from: https://nodejs.org/api/zlib.html#zlib_zlib

import zlib from 'zlib';
import fs from 'fs';


// create a zlib stream
const gzip = zlib.createGzip();

const bigFile = './assets/yellow_tripdata_2017-01.csv';

const readStream = fs.createReadStream(bigFile);
const writeStream = fs.createWriteStream('./destination/gzipped.csv.gz');

readStream.pipe(gzip).pipe(writeStream);
