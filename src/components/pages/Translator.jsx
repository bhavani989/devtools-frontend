import { useState } from "react";
import axios from "axios";

const Translator = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const translate = async () => {
    const res = await axios.post("https://libretranslate.de/translate", {
      q: text,
      source: "en",
      target: "hi",
      format: "text"
    });
    setOutput(res.data.translatedText);
  };

  return (
    <div className="container">
      <h2>Text Translator</h2>

      <textarea
        rows="5"
        placeholder="Enter text..."
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={translate}>Translate</button>

      <h3>Output:</h3>
      <div className="tool-card">{output}</div>
    </div>
  );
};

export default Translator;
