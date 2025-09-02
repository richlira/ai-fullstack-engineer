/**
 * @problem Contains Duplicate
 * @link https://leetcode.com/problems/contains-duplicate/
 * @difficulty Easy
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 * @pattern HashSet
 * @date 2025-09-01
 */

/**
 * Given an integer array nums, return true if any value appears 
 * at least twice in the array, and return false if every element is distinct.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 */

function containsDuplicate(nums: number[]): boolean {
    const hashMap = {};
    for(const num of nums) {
        if(hashMap[num] === undefined) {
            hashMap[num] = num;
        } else {
            return true;
        }
    }
    return false;
};

/**
// Versión más concisa (mismo approach):
function containsDuplicate(nums: number[]): boolean {
    const seen = {};
    for(const num of nums) {
        if(seen[num]) return true;
        seen[num] = true;  // Solo necesitas marcar que existe
    }
    return false;
}

// Versión con Set (más idiomática en JS):
function containsDuplicate(nums: number[]): boolean {
    const seen = new Set();
    for(const num of nums) {
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}

// One-liner con Set (show off 😎):
function containsDuplicate(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
}
 */