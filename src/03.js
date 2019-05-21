import fs from 'fs';


const file = './destination/created_from_stdin.txt';

const stream = fs.createWriteStream(file);
// NOTE: this will overwrite the file everytime we execute this file.

// const stream = fs.createWriteStream(file, {
//   flags: 'a',
//   encoding: null,
//   mode: '0666',
// });

process.stdin.pipe(stream);

// TIP: to see the text coming in realtime,
// you can run a command in a separate terminal to tail the file
// $> tail -f ./destination/created_from_stdin.txt


// Note: This will fail.
// stream.pipe(process.stdin);

// we trying to pipe a write stream to a read stream.
