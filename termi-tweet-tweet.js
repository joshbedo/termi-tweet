var program    = require('commander');
var TwitterAPI = require('./TwitterAPI');

// TwitterAPI.updateStatus('testing');

program
  .usage('<string>')
  .description('Post a tweet on your timeline')
  .parse(process.argv);

// Send API call with tweet passed in
TwitterAPI.updateStatus(program.args[0]);
