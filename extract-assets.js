const fs = require('fs');
const glob = require('glob');
const without = require('lodash/without');

const base = 'src';

const petitionAssets = [
  'components/Bushes/bush-1.svg',
  'components/Bushes/bush-2.svg',
  'components/Bushes/bush-3.svg',
  'components/Head/head.svg',
  'components/Logo/small-logo.svg',
  'components/MeterBoard/board-15-2.svg',
  'components/MeterBoard/board-s-10.svg',
  'components/Runner/runner-sprite.svg',
  'components/Runway/clean-shine.svg',
  'components/Runway/finish.svg',
  'components/Runway/road-pattern.svg',
  'components/Runway/start.svg',
  'components/Runway/trashes.svg',
  'containers/PetitionPage/bubble.svg',
  'containers/PetitionPage/form-head.svg',
  'containers/PetitionPage/pencil.svg',
  'containers/PetitionPage/thanks.svg',
].map((p) => `${base}/${p}`);

const template = (list) => `/* eslint-disable */
export default [
  ${list.map((file) => `require('${file.replace(base, '.')}')`).join(`,
  `)}
];
`;

const handleGlob = (err, list) => {
  fs.writeFile(`${base}/assets.js`, template(without(list, ...petitionAssets)), process.exit);
};

glob(`${base}/**/*.+(jpg|jpeg|gif|png|svg)`, handleGlob);
