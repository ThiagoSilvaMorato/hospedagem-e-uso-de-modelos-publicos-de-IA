import { useState } from "react";
import "./App.css";

function App() {
  const [imgSrc, setImgSrc] = useState(null);
  const [caption, setCaption] = useState("<Caption />");

  function generateCaption() {
    if (!imgSrc) {
      setCaption("Please enter a valid image URL.");
      return;
    }
    setCaption("Generating caption...");
  }

  return (
    <>
      <h1>Caption Generator</h1>
      <div class='url-form'>
        <input onChange={(e) => setImgSrc(e.target.value)} />
        <button onClick={generateCaption}>Generate</button>
      </div>
      <div class='captioned-image'>
        <img height={200} src={imgSrc} alt='' style={{ marginBottom: "10px" }} />
        <span>{caption}</span>
      </div>
    </>
  );
}

export default App;
