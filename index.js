const fs = require("fs");
const words = require("./dat/wordList.json");
const smallWords = require("./dat/smallWordList.json");
let trieDef = require("./comp/Trie");

console.log("nagdi bai");

let trie = new trieDef();

words.forEach((word) => trie.insert(word));
console.log("" + trie.search("tea"));
const result = trie.findAnagrams("listen");
console.log("" + result);
