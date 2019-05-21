/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
const { Readable } = require('stream');

// `Counter` copied from example here: https://nodejs.org/api/stream.html#stream_an_example_counting_stream

class Counter extends Readable {
  constructor(opt) {
    super(opt);
    this._max = 1000000;
    this._index = 1;
  }

  _read() {
    const i = this._index++;
    if (i > this._max) { this.push(null); } else {
      const str = String(i);
      const buf = Buffer.from(`${str}\n`, 'ascii');
      this.push(buf);
    }
  }
}

// TODO: write to stdout

// TODO: write to a file
