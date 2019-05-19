import _ from 'lodash';
import fs from 'fs';
import express from 'express';


const app = express();
const port = 65345;


const fileServHandler = (request, response) => {
  // download file from location
  // file url: https://s3.amazonaws.com/jspreddy-gov-data/nyc-taxi-tlc/yellow_tripdata_2017-01.csv

  // send file to user.
};

app.get('/file', fileServHandler);


app.listen(
  port,
  () => console.log(`App listening on port ${port}`),
);
