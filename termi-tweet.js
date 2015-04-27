#!/usr/bin/env node

var program = require('commander');
var pkg     = require('./package.json');

program
  .version(pkg.version)
  .description("termi-tweet is used to post tweets, check your timeline, and search for tweets")
  .command('tweet <string>', 'add some text to tweet!')
  .command('setup', 'setup your api credentials')
  .on('--help', showHelp)
  .parse(process.argv)

function showHelp() {
  console.log('See --help for each command and usage example');
}
