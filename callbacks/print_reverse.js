var getHTML = require('../http-function');

function printHTML (html) {
  console.log(html.split("").reverse().join(""));
}

var requestOptions = {
  host: 'syntantrist.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, printHTML);