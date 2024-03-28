import getRandomWords from './utils.js';
const fs = require('fs');
const path = require('path');

let rawdata = fs.readFileSync(path.resolve(__dirname, '../data/data.json'));
let words = JSON.parse(rawdata);

test('your function does something', () => {
    const result = getRandomWords(words.Words, 20);
    expect(result).toHaveLength(20);
  });