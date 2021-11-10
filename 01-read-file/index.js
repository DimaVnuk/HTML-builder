const fs = require("fs");
const path = require("path");

fs.ReadStream(path.join(__dirname, "./text.txt"), "utf8").on(
  "data",
  (data, err) => {
    if (err) throw err;
    console.log(data);
  }
);
