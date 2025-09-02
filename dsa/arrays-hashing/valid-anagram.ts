/**
 * @problem Valid Anagram
 * @link https://leetcode.com/problems/valid-anagram/
 * @difficulty Easy
 * @timeComplexity O(n) for HashMap, O(n log n) for sorting
 * @spaceComplexity O(n) for HashMap, O(1) for sorting (if in-place)
 * @pattern HashMap / Character Frequency Counter
 * @date 2025-09-01
 */

/**
 * Given two strings s and t, return true if t is an anagram of s, 
 * and false otherwise.
 * 
 * An Anagram is a word formed by rearranging the letters of a different word,
 * using all the original letters exactly once.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * Example 3:
 * Input: s = "a", t = "ab"
 * Output: false
 */

function isAnagram(s: string, t: string): boolean {
    let hashMapS = {};
    let hashMapT = {};
    for(const letter of s) {
        if(hashMapS[letter] === undefined) {
            hashMapS[letter] = 1;
        } else {
            hashMapS[letter] += 1;
        }
    }

    for(const letter of t) {
        if(hashMapT[letter] === undefined) {
            hashMapT[letter] = 1;
        } else {
            hashMapT[letter] += 1;
        }
    }

    const keysS = Object.keys(hashMapS);
    const keysT = Object.keys(hashMapT);

    if (keysS.length !== keysT.length) return false;

    for(const key of keysS) {
        if(hashMapS[key] !== hashMapT[key]) return false;
    }

    return true;
};

/*
// Solución 3: Sorting approach - O(n log n)
function isAnagramSort(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    // Convertir a array, ordenar, y volver a string
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;
}

// Solución 4: Array de 26 (solo para lowercase english letters)
function isAnagramArray(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    // Array de 26 posiciones para a-z
    const count = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        // 'a'.charCodeAt(0) = 97, así que restamos para get índice 0-25
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }
    
    // Si todos son 0, son anagramas
    return count.every(val => val === 0);
}

// Solución 5: Map (más moderno que objeto)
function isAnagramMap(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const map = new Map();
    
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    for (const char of t) {
        const count = map.get(char);
        if (!count) return false;
        
        if (count === 1) {
            map.delete(char);
        } else {
            map.set(char, count - 1);
        }
    }
    
    return map.size === 0;
}

*/