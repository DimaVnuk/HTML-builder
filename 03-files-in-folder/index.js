let fs = require("fs");
const path = require("path");

let secretFolder = path.join(__dirname, "secret-folder");

fs.readdir(secretFolder, (err, files) => {
  if (err) throw err;
  files.forEach((i) => {
    fs.stat(`${secretFolder}/${i}`, (err, stats) => {
      if (err) throw err;
      if (stats.isFile()) {
        console.log(
          `${i.split(".").join(" - ")} - ${(stats.size / 1000)
            .toString()
            .slice(0, 4)} kb`
        );
      }
    });
  });
});
