import _ from 'lodash';
import fs from 'fs';

process.title = 'streams';

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

fs.readFile(file, (err, data) => {
  if (err) {
    throw err;
  } else {
    const content = data.toString() + _.repeat('-', 20);
    console.log(content);
  }
});
