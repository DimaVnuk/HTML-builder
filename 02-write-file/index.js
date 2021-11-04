let fs = require("fs");
let path = require("path");
let readline = require("readline");
let process = require("process");

let file = path.join(__dirname, "./text.txt");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

fs.open(file, "a", (err) => {
  console.log("Enter Your Message:");
  if (err) throw err;
});

rl.on("line", (data) => {
  if (data === "exit") {
    console.log("Bye!");
    process.exit(0);
  } else {
    fs.appendFile(file, `${data} `, (err) => {
      if (err) throw err;
    });
  }
});

rl.on("close", () => console.log("Bye!"));
