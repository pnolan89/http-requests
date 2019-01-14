var https = require('https');

function getHTML (options, callback) {

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

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'syntantrist.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printHTML);