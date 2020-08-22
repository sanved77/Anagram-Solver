const fs = require("fs");

const wordList = fs.readFileSync("./words.txt", {
  encoding: "utf-8",
  flag: "r",
});
const words = wordList.split("\n");
fs.writeFileSync("./wordListTemp.json", JSON.stringify(words));
