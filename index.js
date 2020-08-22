const express = require("express");
const app = express();
const cors = require("cors");
const words = require("./dat/wordList.json");
let trieDef = require("./comp/Trie");

const PORT = 3003;
let trie = new trieDef();

words.forEach((word) => trie.insert(word));

app.use(cors());

app.get("/", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  let word = req.query.word;
  if (req.query.word === undefined) return res.send("Please send a word");
  if (/\d/.test(word)) return res.send("Numbers not allowed");
  res.send(word === undefined ? [] : trie.findAnagrams(word.toLowerCase()));
});

app.listen(PORT, () => {
  console.log(`Anagram Solver listening at http://sanved.com/anagram-api:${PORT}`);
});
