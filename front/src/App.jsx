import "./App.css";

function App() {
  return (
    <>
      <h1>Caption Generator</h1>
      <div class='url-form'>
        <input type='text' />
        <button>Generate</button>
      </div>
      <div class='captioned-image'>
        <img height={200} width={200} src='' alt='' style={{ marginBottom: "10px" }} />
        <span>Caption</span>
      </div>
    </>
  );
}

export default App;
