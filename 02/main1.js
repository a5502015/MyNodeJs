//阻塞code
var fs = require("fs");

var data = fs.readFileSync("input.txt");

console.log(data.toString());
console.log("end main");