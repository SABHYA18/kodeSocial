const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filepath) => {
  const jobID = path.basename(filepath).split(".")[0];
  const outPath = path.join(outputPath, `${jobID}.exe`);

  const promise1 = new Promise((resolve, reject) => {
    // if ($?) { g++ isSorted.cpp -o isSorted } ; if ($?) { .\isSorted }+3
    exec(
      `g++ ${filepath} -o ${outPath} && cd ${outputPath} && .\\${jobID}.exe`,
      (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr });
        }
        if (stderr) {
          reject(stderr);
        }
        resolve(stdout);
      }
    );
  });
  promise1.catch((error) => {
    console.error(error);
  });
  return promise1;
};

module.exports = {
  executeCpp,
};
