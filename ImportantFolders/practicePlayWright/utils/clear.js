const fs = require("fs");

function clearAllureResultsDirectory() {
  const allureResultsDirectory = "allure-results/*";

  if (fs.existsSync(allureResultsDirectory)) {
    fs.rmdirSync(allureResultsDirectory, { recursive: true }, (err) => {
      if (err) {
        console.error(`Error deleting directory: ${err}`);
      } else {
        console.log(
          `Allure report directory '${allureResultsDirectory}' deleted.`
        );
      }
    });
  } else {
    console.log(
      `Allure report directory '${allureResultsDirectory}' does not exist.`
    );
  }
}

module.exports = clearAllureResultsDirectory;
