/**
 * @problem Two Sum
 * @link https://leetcode.com/problems/two-sum/
 * @difficulty Easy
 * @timeComplexity O(n) with HashMap, O(n²) with brute force
 * @spaceComplexity O(n) with HashMap, O(1) with brute force
 * @pattern HashMap - Store value and index
 * @date 2025-09-01
 */

/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: nums[0] + nums[1] = 2 + 7 = 9
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */

function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            const test = nums[i] + nums[j];
            if (test == target) {
                return [i,j];
            }
        }
    }
    return [];
};

/*
function twoSum(nums: number[], target: number): number[] {
    const map = {};  // HashMap para guardar {valor: índice}
    
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];  // Lo que necesito encontrar
        
        // ¿Ya vi el complement antes?
        if(map[complement] !== undefined) {
            return [map[complement], i];  // ¡Lo encontré!
        }
        
        // Guardo el número actual para futuras búsquedas
        map[nums[i]] = i;
    }
    return [];
}
*/