/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 *
 * https://leetcode-cn.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (51.38%)
 * Likes:    63
 * Dislikes: 0
 * Total Accepted:    14.2K
 * Total Submissions: 27.7K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给定一个赎金信 (ransom)
 * 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。如果可以构成，返回
 * true ；否则返回 false。
 * 
 * (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)
 * 
 * 注意：
 * 
 * 你可以假设两个字符串均只含有小写字母。
 * 
 * 
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    /**
     * 方法二
     * 
     * 思路
     * 将magazine字符串转换为数组
     * 遍历ransomNote, 通过indexOf去magazine字符串中查找
     * 如果没找到，直接返回false
     * 如果找到了将magazine中index位置的元素置为null
     * 如果遍历完 全部找到
     * 则说明ransomNote可以通过magazine生成， 返回 true
     * 
     * Accepted
     * 126/126 cases passed (80 ms)
     * Your runtime beats 82.72 % of javascript submissions
     * Your memory usage beats 46.32 % of javascript submissions (37.2 MB)
     */
    magazine = magazine.split('')
    for(let i = 0, len = ransomNote.length; i < len; i++) {
      let index = magazine.indexOf(ransomNote[i])
      if (index < 0) {
        return false
      } else {
        magazine[index] = null
      }
    }
    return true
};
// @lc code=end

/**
 * 方法一
 * 
 * 思路
 * 分别计算ransomNote和magazine中每个字母的个数
 * 最后只要ransomNote中每个字母的个数小数等于magazine中的字母的个数就返回true
 * 
 * 代码如下
 * 
 * const ransomNoteObj = {}
 * for(let i = 0, len = ransomNote.length; i < len; i++) {
 *   if (ransomNoteObj[ransomNote[i]]) {
 *     ransomNoteObj[ransomNote[i]]++
 *   } else {
 *     ransomNoteObj[ransomNote[i]] = 1
 *   }
 * }
 * const magazineObj = {}
 * for (let i = 0, len = magazine.length; i < len; i++) {
 *     if (magazineObj[magazine[i]]) {
 *         magazineObj[magazine[i]]++
 *     } else {
 *         magazineObj[magazine[i]] = 1
 *     }
 * }
 * return Object.keys(ransomNoteObj)
 *     .every(key => magazineObj[key] >= ransomNoteObj[key]) 
 * 
 * 
 * Accepted
 * 126/126 cases passed (96 ms)
 * Your runtime beats 48.16 % of javascript submissions
 * Your memory usage beats 43.69 % of javascript submissions (37.4 MB)
 */