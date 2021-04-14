/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.children = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.children
  for(let ch of word) {
    if(!node[ch]) {
      node[ch] = {}
    }
    node = node[ch]
  }
  node.isEnd = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const node = this.searchPrefix(word)
  return node && node.isEnd !== undefined
};

Trie.prototype.searchPrefix = function(prefix) {
  let node = this.children
  for(let ch of prefix) {
    if (!node[ch]) {
      return false
    }
    node = node[ch]
  }
  return node
}
/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return !!this.searchPrefix(prefix)
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
 
/**
 * var Trie = function() {
  this.data = []
};


Trie.prototype.insert = function(word) {
  this.data.push(word)
};

Trie.prototype.search = function(word) {
  return Boolean(this.data.find(item => item === word))
};


Trie.prototype.startsWith = function(prefix) {
  return this.data.some(item => item.startsWith(prefix))
};
*/