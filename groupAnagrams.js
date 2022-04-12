/**
 * https://leetcode.com/problems/group-anagrams/
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const hashMap = {}
    for (let s of strs) {
        const sorted = s.split('').sort().join('');
        if (hashMap.hasOwnProperty(sorted)) {
            hashMap[sorted].push(s)
        } else {
            hashMap[sorted] = [s]
        }
    }
    return Object.values(hashMap);
};