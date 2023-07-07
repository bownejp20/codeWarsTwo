// A subarray is any contiguous block of an array's elements. Given an array of integers, find the sum of all elements of all subarrays of that array 

// Example: three element array [4,5,6] can be made into the following subarrays:
// 1. element subarrays: [4], [5], [6]
// 2. element subarrays: [4,5], [5,6]
// 3. element subarrays: [4,5,6]

// The sum of all subarrays is 4+5+6+(4+5)+(5+6)+(4+5+6)= 50

import java.util.Arrays;

public class SubarraySum {
    public static int getSubarraySum(int[] nums) {
        int sum = 0;
        int n = nums.length;

        // Calculate the sum of each element multiplied by its frequency in subarrays
        for (int i = 0; i < n; i++) {
            sum += nums[i] * (i + 1) * (n - i);
        }

        return sum;
    }

    public static void main(String[] args) {
        int[] arr = {4, 5, 6};
        int result = getSubarraySum(arr);
        System.out.println("Sum of all subarrays: " + result);
    }
}
