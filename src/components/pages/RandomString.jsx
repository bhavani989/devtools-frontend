import { useState } from "react";

const RandomString = () => {
  const [length, setLength] = useState(8);
  const [result, setResult] = useState("");

  const generate = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setResult(str);
  };

  return (
    <div className="container">
      <h2>Random String Generator</h2>

      <input
        type="number"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />

      <button onClick={generate}>Generate</button>

      <h3>Result:</h3>
      <div className="tool-card">{result}</div>
    </div>
  );
};

export default RandomString;
