import fs from 'fs';

const smallFile = './assets/test.txt';

// Download the following file to ./assets/
// $> cd assets
// $> wget https://norvig.com/big.txt
const mediumFile = './assets/big.txt';

// Download the following file to ./assets/
// $> cd assets
// $> wget https://s3.amazonaws.com/jspreddy-gov-data/nyc-taxi-tlc/yellow_tripdata_2017-01.csv
const bigFile = './assets/yellow_tripdata_2017-01.csv';

const file = smallFile;

const stream = fs.createReadStream(file);

stream.pipe(process.stdout);
