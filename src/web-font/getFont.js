const range = require('lodash/range');
const {
  start,
  finish,
  person,
  target,
  done,
} = require('../text/petition');
const fontMin = require('./fontMin');

const sourceText = {
  tetsuBin: [
    start,
    finish,
    person,
    target,
    done,
    ...range(10),
    ',',
  ],
};

fontMin(sourceText).then(process.exit)
  .catch(console.error);
