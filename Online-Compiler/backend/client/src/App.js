import axios from "axios";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    const payload = {
      language: "cpp",
      code,
    };
    try {
      const { data } = await axios.post("http://localhost:5000/run", payload);
      setOutput(data.output);
    } catch ({ response }) {
      if (response) {
        const errMsg = response.data.err.stderr;
        setOutput(errMsg);
      } else {
        setOutput("Error connecting to server!");
      }
    }
  };
  return (
    <div className="App">
      <div className="user-code">
        <div>Here will be User Code</div>
      </div>
      <div className="input-container">
        <div className="compiler">
          <textarea
            rows="20"
            cols="75"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          ></textarea>
        </div>
        <p>
          <div className="output-heading">
            <b>OUTPUT</b>
          </div>
          <br></br>
          {output}
        </p>
        <div className="button-container">
          <button onClick={handleSubmit}>Run Code</button>
        </div>
      </div>
    </div>
  );
}

export default App;
