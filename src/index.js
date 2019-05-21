import _ from 'lodash';
import fs from 'fs';

const smallFile = './assets/test.txt';

// $> wget https://norvig.com/big.txt
const mediumFile = './assets/big.txt';

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
