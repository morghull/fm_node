'use strict';

const fs = require('fs/promises');
const {Component} = require('./js/Component');

fs.readFile('./text.txt', { encoding: 'utf-8' }).then(
  (file) => {
    fs.writeFile('./newtext.txt', file + '\r\nLorem!!!', {
      encoding: 'utf-8',
    });
  }
);
console.log(Component);
