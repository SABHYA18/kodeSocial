const { exec } = require("child_process");
// const outputPath = path.join(__dirname, "outputs");

// if (!fs.existsSync(outputPath)) {
//   fs.mkdirSync(outputPath, { recursive: true });
// }

const executePy = (filepath) => {
  // const jobID = path.basename(filepath).split(".")[0];
  // const outPath = path.join(outputPath, `${jobID}.exe`);

  return new Promise((resolve, reject) => {
    // `g++ ${filepath} -o ${outPath} && cd ${outputPath} && .\\${jobID}.exe`
    exec(`python ${filepath}.exe`, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stderr });
      }
      if (stderr) {
        reject(stderr);
      }
      resolve(stdout);
    });
  });
  // promise1.catch((error) => {
  //   console.error(error);
  // });
  // return promise1;
};

module.exports = {
  executePy,
};
