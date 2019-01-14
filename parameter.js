var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var output = "";

    response.on('data', function (data) {
      output += data;
    });

    response.on('end', function() {
      console.log(output);
    });
  });

}

var requestOptions = {
  host: 'syntantrist.github.io',
  path: '/http-examples/step1.html'
};

getAndPrintHTML(requestOptions);