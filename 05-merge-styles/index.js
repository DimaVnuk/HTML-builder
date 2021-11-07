const fs = require("fs");
const path = require("path");
const folderStyle = path.join(__dirname, "styles");
const bundle = path.join(__dirname, "project-dist/bundle.css");
fs.mkdir("bundle", { recursive: true }, (err) => {
  if (err) throw err;
});

fs.open(bundle, "a", (err) => {
  if (err) throw err;
  console.log("Bundle.css created");
});

fs.readdir(folderStyle, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  for (let i of files) {
    if (path.extname(i.name) === ".css") {
      fs.readFile(`${folderStyle}/${i.name}`, "utf-8", (err, data) => {
        if (err) throw err;
        fs.appendFile(bundle, data, (err) => {
          if (err) throw err;
        });
      });
    }
  }
});
