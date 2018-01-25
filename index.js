const score = require('./score');

const scoresArray = process.argv.slice(2)
  .map(p => parseInt(p, 10));

console.log(score(scoresArray));
