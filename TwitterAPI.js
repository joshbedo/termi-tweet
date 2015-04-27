var Twit = require('twit');
var chalk = require('chalk');

var creds = {
  consumer_key: '...'
  , consumer_secret: '...'
  , access_token: '...'
  , access_token_secret: '...'
};

var T = new Twit({
  consumer_key: creds.consumer_key
  , consumer_secret: creds.consumer_secret
  , access_token: creds.access_token
  , access_token_secret: creds.access_token_secret
})

var TwitterAPI = (function() {

  var colors = ['red', 'green', 'blue', 'yellow', 'magenta', 'cyan']

  var updateStatus = function(status) {
    T.post('statuses/update', { status: status }, function(err, data) {
      if (err) return console.log(chalk.red(err));

      var selectedColor = colors[Math.round(Math.random()*colors.length)];
      console.log(chalk[selectedColor]('You tweeted: ' +status))
    })
  }

  var setupCredentials = function(newCreds) {
    creds = newCreds;
  }


  return {
    updateStatus: updateStatus,
    setupCredentials: setupCredentials
  }
})

module.exports = new TwitterAPI();
