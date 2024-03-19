function generateRandString(numOfItr) {
  var genChars = "abcdefghijklmnopqrstuvwxyz12345";
  var returnStr = "";
  for (var i = 0; i < parseInt(numOfItr); i++) {
    returnStr =
      returnStr + genChars.charAt(Math.round(genChars.length * Math.random()));
  }
  return returnStr;
}

function readJson(path) {
  const fs = require('fs');
  const data = JSON.parse(fs.readFileSync(path));
  return data;
}

module.exports = { generateRandString , readJson};
