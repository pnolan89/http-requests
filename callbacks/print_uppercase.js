var getHTML = require('../http-function');

function printHTML (html) {
  console.log(html.toUpperCase());
}

var requestOptions = {
  host: 'syntantrist.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printHTML);