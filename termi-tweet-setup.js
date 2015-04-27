#!/usr/bin/env node
var TwitterAPI = require('./TwitterAPI');
var program  = require('commander');
var inquirer = require('inquirer');

var defaults = {
  consumer_key: '...'
  , consumer_secret: '...'
  , access_token: '...'
  , access_token_secret: '...'
};

inquirer.prompt([
  {
    type: 'input',
    name: 'consumer_key',
    message: 'Enter your consumer_key',
    default: defaults.consumer_key
  },
  {
    type: 'input',
    name: 'consumer_secret',
    message: 'Enter your consumer_secret',
    default: defaults.consumer_secret
  },
  {
    type: 'input',
    name: 'access_token',
    message: 'Enter your access_token',
    default: defaults.consumer_secret
  },
  {
    type: 'input',
    name: 'access_token_secret',
    message: 'Enter your access_token_secret',
    default: defaults.access_token_secret
  }
], function(creds) {
  TwitterAPI.setupCredentials(creds);
})
