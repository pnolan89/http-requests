var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'syntantrist.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Received a chunk with length of: ', data.length + '\n');
    });

    response.on('end', function() {
      console.log('End of stream.');
    });

  });

}

getAndPrintHTMLChunks();