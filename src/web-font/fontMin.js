const path = require('path');
const Fontmin = require('fontmin');

const dest = path.resolve(__dirname, './minified');

const fontMinGen = (src, text) => [
  new Fontmin()
    .src(src)
    .use(Fontmin.glyph({ text }))
    .dest(dest),
  new Fontmin()
    .src(src)
    .use(Fontmin.glyph({ text }))
    .use(Fontmin.ttf2woff())
    .dest(dest),
];

module.exports = (charMap) => {
  const tetsuBin = fontMinGen(
    path.resolve(__dirname, './source/TetsuBinGothic.ttf'),
    charMap.tetsuBin.join('')
  );

  return Promise.all(tetsuBin.map(((task) => new Promise((resolve, reject) => {
    task.run((err) => {
      if (err) return reject(err);
      return resolve();
    });
  }))));
};
