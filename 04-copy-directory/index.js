let fs = require("fs");
const path = require("path");

let folder = path.join(__dirname, "files");
let newFolder = path.join(__dirname, "files-copy");

fs.mkdir(newFolder, { recursive: true }, (err) => {
  if (err) throw err;
});

fs.readdir(folder, (err, files) => {
  if (err) throw err;

  for (let i of files) {
    fs.copyFile(path.join(folder, i), path.join(newFolder, i), (err) => {
      if (err) throw err;
    });
  }
});

fs.readdir(newFolder, (err, files) => {
  if (err) throw err;

  for (let i of files) {
    fs.unlink(path.join(newFolder, i), () => {});
  }
});
