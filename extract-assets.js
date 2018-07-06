const fs = require('fs');
const glob = require('glob');

const base = 'src';

const template = (list) => `/* eslint-disable */
export default [
  ${list.map((file) => `require('${file.replace(base, '.')}')`).join(`,
  `)}
];
`;

const handleGlob = (err, list) => {
  fs.writeFile(`${base}/assets.js`, template(list), process.exit);
};

glob(`${base}/**/*.+(jpg|jpeg|gif|png|svg)`, handleGlob);
