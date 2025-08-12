import express from "express";
import Tokenizer from "./tokenizer.js";

const app = express();
const tokenizer = new Tokenizer();

app.use(express.static("public"));
app.use(express.json());

app.post("/encode", (req, res) => {
  const { text } = req.body;
  res.json({ tokens: tokenizer.encode(text) });
});

app.post("/decode", (req, res) => {
  const { tokenIds } = req.body;
  res.json({ text: tokenizer.decode(tokenIds) });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
