# kadanes_algorithm

### AlgoExpert Problem
https://www.algoexpert.io/questions/Kadane's%20Algorithm

### Formation Prompt
Q. Given a non-empty array of integers, return the maximum sum by adding up all of the integers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers.

Examples:
- Given an array: [-2, 1] // returns 1
- Given an array: [3, 4, -6, 7, 9] // returns17 (3 + 4 + (-6) + 7 + 9) 

```
function ka(array) {
    // Write your code here.
}

// Test Cases
test.startProblem("Kadane's Algorithm")
test.test(1, ka([-2, 1]), 1)
test.test(17, ka([3, 4, -6, 7, 9]), 2)
test.test(29, ka([3, 10, -9, 1, 3, 0, 3, 9, 7, 2, -9, 6, -6, 1, -7, 4]), 3)
test.test(-1, ka([-1, -2, -3, -4, -5, -1, -7, -8, -9, -10, -10]), 4)
test.test(50, ka([3, 4, -6, 7, 8, -18, 50]), 5)
test.test(0, ka([0, -1, -1, -1, -1, -1, -1, -1]), 6)
test.endProblem()
```
