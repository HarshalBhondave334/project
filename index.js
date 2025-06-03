console.log('🚀 Hello from Node.js!')

var i = 10;
var j = 20;

i = i + j;
j = i - j;

console.log(j);

// array 
let arr = [1,"p",4,"maggi"];
for (i=0;i<=arr.length;i++){
    console.log(arr[i]);
}


/// array object 

let person =  { firstname:'Dipak', product:'maggi',price:100,address:'Ambivali'}
// console.log(person[address]);
console.log(person.address);


// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time is currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

              var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currently: " + dt.myDateTime());
  res.end();
}).listen(8080);

// exports.myDateTime = function() {
//   return new Date().toString();
// };
