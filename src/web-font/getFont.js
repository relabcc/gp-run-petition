const range = require('lodash/range');
const {
  start,
  finish,
  person,
  target,
} = require('../text/petition');
const fontMin = require('./fontMin');

const sourceText = {
  tetsuBin: [
    start,
    finish,
    person,
    target,
    ...range(0, 10),
    ',',
  ],
};

fontMin(sourceText).then(process.exit)
  .catch(console.error);
