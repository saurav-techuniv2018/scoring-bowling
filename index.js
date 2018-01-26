const args = require('command-line-args');
const score = require('./score');

const optionDefinitions = [
  {
    name: 'scores', alias: 's', type: Number, multiple: true, defaultOption: true,
  },
  {
    name: 'frames', alias: 'f', type: Number,
  },
];
const receivedArguments = args(optionDefinitions);

console.log(score(receivedArguments.scores, receivedArguments.frames));
