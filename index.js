'use strict';

const fs = require('fs/promises', 'utf-8');

fs.readFile('./text.txt', { encoding: 'utf-8' }).then(
  (file) => {
    fs.writeFile('./newtext.txt', file + '\r\nLorem!!!', {
      encoding: 'utf-8',
    });
  }
);
