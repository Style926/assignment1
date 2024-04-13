const { argv } = require('process');
var figlet = require("figlet");
// print process.argv

// console.log(`${argv[2]}`);
const text = argv[2];


figlet(text, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});