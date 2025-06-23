const express = require("express");
const cors = require("cors");
const { translate } = require("./models/api");
const { Translator } = require("./models/Translator");

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.post("/translate", async (req, res) => {
  console.log("Nova requisição de tradução recebida!");

  const textENG = req.body["text"];

  console.log("Texto em inglês:", textENG);

  const textPTBR = await translate(textENG);

  console.log("Texto traduzido para português:", textPTBR[0]["translation_text"]);

  res.send(textPTBR);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
