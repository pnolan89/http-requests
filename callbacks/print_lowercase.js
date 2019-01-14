var getHTML = require('../http-function');

function printHTML (html) {
  console.log(html.toLowerCase());
}

var requestOptions = {
  host: 'syntantrist.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, printHTML);