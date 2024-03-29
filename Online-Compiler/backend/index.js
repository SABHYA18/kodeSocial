const express = require("express");
const cors = require("cors");
const { generateFile } = require("./generateFile");
const { executeCpp } = require("./executeCpp");
const { executePy } = require("./executePy");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

app.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;
  // console.log(language);
  console.log(language, code.length, "hey");
  if (code === undefined) {
    return res.status(400).json({ success: false, error: "Empty Code Body" });
  }

  // need to generate a cpp file with content from the request
  try {
    const filepath = await generateFile(language, code);

    // we need to run the file and send the response
    let output;

    if (language === "cpp") {
      output = await executeCpp(filepath);
    } else {
      output = await executePy(filepath);
    }

    return res.json({ filepath, output });
  } catch (err) {
    res.status(500).json({ err });
  }
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
