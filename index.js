const args = require('command-line-args');
const printUsage = require('./print-usage');
const score = require('./score');

const optionDefinitions = [
  {
    name: 'scores',
    alias: 's',
    type: Number,
    multiple: true,
    defaultOption: true,
  },
  {
    name: 'frames',
    alias: 'f',
    type: Number,
  },
];
const receivedArguments = args(optionDefinitions);

if (receivedArguments.scores === undefined) {
  printUsage();
  process.exit();
}

console.log(score(receivedArguments.scores, receivedArguments.frames));
