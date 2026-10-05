// Leetcode#561 - Array Partition
function arrayPairSum(nums) {
  nums.sort((a, b) => a - b);

  let maxSum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    maxSum += nums[i];
  }
  return maxSum;
}

/**
 * Approach:
 * 1. To maximize the sum of minimum values in pairs, we must minimize the "waste"
 *    of larger numbers. Pairing a large number with a drastically smaller one
 *    sacrifices the larger number completely.
 * 2. The optimal strategy is to pair adjacent elements. To achieve this, we first
 *    sort the array in ascending order.
 * 3. After sorting, the minimum element of every consecutive pair will always
 *    sit at an even index (0, 2, 4, ...).
 * 4. We iterate through the sorted array with a step size of 2, summing up the
 *    elements at these even indices to get the maximized total.
 
 * Complexity Analysis:
 * - Time Complexity: O(N log N) due to JS built-in Timsort algorithm. The subsequent
 *   for-loop runs in O(N) time, making sorting the dominant factor.
 * - Space Complexity: O(N) because JavaScript's array sorting requires auxiliary
 *   memory in the background.
 */
