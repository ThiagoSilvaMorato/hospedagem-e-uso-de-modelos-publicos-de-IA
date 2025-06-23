const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/translate", (req, res) => {
  res.send({ translated_text: "Legenda traduzida!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
