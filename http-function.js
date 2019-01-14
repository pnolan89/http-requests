var https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var output = "";

    response.on('data', function (data) {
      output += data;
    });

    response.on('end', function() {
      callback(output);
    });
  });

};