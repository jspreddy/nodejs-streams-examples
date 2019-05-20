import _ from 'lodash';
import fs from 'fs';
import express from 'express';
import url from 'url';


const app = express();
const port = 65345;

const smallFile = './assets/test.txt';

// $> wget https://norvig.com/big.txt
const mediumFile = './assets/big.txt';

// $> wget https://s3.amazonaws.com/jspreddy-gov-data/nyc-taxi-tlc/yellow_tripdata_2017-01.csv
const bigFile = './assets/yellow_tripdata_2017-01.csv';

const file = smallFile;

const localSmallFileHandler = (request, response) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      throw err;
    } else {
      const content = data.toString() + _.repeat('-', 20);
      console.log(content);
      response.send(content);
    }
  });
};

app.get('/local-small-file', localSmallFileHandler);

app.listen(
  port,
  () => console.log(`App listening on port ${port}`),
);
