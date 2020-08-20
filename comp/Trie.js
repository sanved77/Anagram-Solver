class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }

  findAnagrams(word) {
    console.log("");
    let result = {};
    result.anagrams = [];
    let set = new Set();
    let node = this.root;
    this.anagramHelper(result, word, set, node);
    return result;
  }

  anagramHelper(result, word, set, node, wordSoFar = "") {
    if (wordSoFar.length === word.length && node.isWord && word !== wordSoFar && !result.anagrams.includes(wordSoFar)) {
      result.anagrams.push(wordSoFar);
      return;
    }
    if (node.isWord) {
      let len = wordSoFar.length;
      if (len !== 1) {
        if (result["" + len] === undefined) result["" + len] = [];
        if (!result["" + len].includes(wordSoFar)) result["" + len].push(wordSoFar);
      }
    }
    for (let i = 0; i < word.length; i++) {
      let ch = word.charAt(i);
      if (node[ch] !== undefined && !set.has(i)) {
        set.add(i);
        this.anagramHelper(result, word, set, node[ch], wordSoFar + ch);
        set.delete(i);
      }
    }
  }
}

module.exports = Trie;
