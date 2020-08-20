const express = require("express");
const app = express();
const words = require("./dat/wordList.json");
let trieDef = require("./comp/Trie");

const PORT = 3003;
let trie = new trieDef();

words.forEach((word) => trie.insert(word));

app.get("/", function (req, res) {
  if (!req.params.word) return res.send("Please send a word");
  let word = req.query.word;
  res.send(word === undefined ? [] : trie.findAnagrams(word));
});

app.listen(PORT, () => {
  console.log(`Anagram Solver listening at http://sanved.com/anagram:${PORT}`);
});
