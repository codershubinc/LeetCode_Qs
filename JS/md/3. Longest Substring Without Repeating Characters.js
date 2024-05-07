/**
 * @param {string} s
 * @return {number}
 */

//3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let current = 0;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            current = Math.max(current, map[s[i]] + 1);
        }
        map[s[i]] = i;
        longest = Math.max(longest, i - current + 1);
    }
    return longest;
  
    
};


const result = lengthOfLongestSubstring("bbb")
console.log(result);