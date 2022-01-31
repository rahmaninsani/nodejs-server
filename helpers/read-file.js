const fs = require("fs");

const fsReadFileHtml = (htmlFile) => {
  return new Promise((resolve, reject) => {
    fs.readFile(htmlFile, null, (error, htmlString) => {
      if (!error && htmlString) {
        resolve(htmlString);
      } else {
        reject(error);
      }
    });
  });
};

module.exports = fsReadFileHtml;
