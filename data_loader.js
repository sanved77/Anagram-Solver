const fs = require("fs");

const wordList = fs.readFileSync("./words.txt", {
  encoding: "utf-8",
  flag: "r",
});
const words = wordList.split("\r\n");
fs.writeFileSync("./wordList.json", JSON.stringify(words));
