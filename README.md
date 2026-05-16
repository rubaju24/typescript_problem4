# typescript_problem4

CanJump

# Jump Game Problem (Greedy Solution)

## Overview

This project implements a greedy solution for the **Jump Game Problem** – determining if you can reach the last index of an array starting from the first index, where each element represents the maximum jump length from that position.

## Problem Statement

Given an array of non-negative integers arr where each element represents the maximum number of steps you can jump forward from that position, determine if you can reach the last index starting from index 0.

### Example

For the input: [2, 3, 1, 1, 4]

Starting at index 0 with value 2, you can jump to index 1 or 2. From there, you can eventually reach the last index.

## How It Works

The greedy approach keeps track of the maximum reachable index as we iterate through the array:

1. Initialize maxReach = 0 (farthest index we can reach)
2. For each index i from 0 to n-1:
   - If i is beyond maxReach, return false (can't reach this position)
   - Update maxReach = max(maxReach, i + arr[i])
   - If maxReach reaches or exceeds the last index (n-1), return true
3. If loop completes, return false

## Complexity

- Time: O(n) – single pass through the array
- Space: O(1) – only uses a few variables

## Prerequisites

- Node.js (version 12 or higher)
- TypeScript

## Setup and Execution

1. Save the code in a file named jumpGame.ts

2. Install TypeScript:
   npm install -g typescript

3. Compile the file:
   tsc jumpGame.ts

4. Run the compiled file:
   node jumpGame.js

## Usage

const arr = [2, 3, 1, 1, 4];
const result = canJump(arr);
console.log(result); // Output: true

## Step-by-Step Example

### Example 1: [2, 3, 1, 1, 4]

Index 0: arr[0]=2, maxReach = max(0, 0+2) = 2
Index 1: arr[1]=3, maxReach = max(2, 1+3) = 4
maxReach >= 4 (last index), return true

### Example 2: [3, 2, 1, 0, 4]

Index 0: arr[0]=3, maxReach = max(0, 0+3) = 3
Index 1: arr[1]=2, maxReach = max(3, 1+2) = 3
Index 2: arr[2]=1, maxReach = max(3, 2+1) = 3
Index 3: arr[3]=0, maxReach = max(3, 3+0) = 3
Index 4: i=4, i > maxReach (4 > 3), return false

## Test Cases

### Test 1: Can reach end

Input: [2, 3, 1, 1, 4]
Output: true

### Test 2: Cannot reach end

Input: [3, 2, 1, 0, 4]
Output: false

### Test 3: Single element (already at end)

Input: [0]
Output: true

### Test 4: All zeros except first

Input: [1, 0, 0, 0]
Output: false

### Test 5: Large jumps

Input: [5, 0, 0, 0, 0]
Output: true

### Test 6: Zero at first position

Input: [0, 1, 2, 3]
Output: false

### Test 7: Exactly reaching end

Input: [1, 1, 1, 1, 1]
Output: true

### Test 8: Big jump overshoots

Input: [10, 0, 0, 0, 0]
Output: true

## Visual Explanation

Array: [2, 3, 1, 1, 4]
Index: 0 1 2 3 4

Step-by-step reachable range:
Start: can reach index 2
[x, _, _, _, _] x=index 0
[✓, ✓, ✓, _, _] can reach indices 0,1,2

At index 1: can reach index 4
[✓, ✓, ✓, ✓, ✓] can reach all indices ✓

### For failing case [3,2,1,0,4]:

Start: reach up to index 3
At index 3: stuck (arr[3]=0)
Can't reach index 4 → false

## Key Insight

We don't need to know the exact path, only the maximum reachable index. If at any point we're stuck (current index > maxReach), we can never reach the end.

## Features

- Optimal O(n) greedy solution
- No extra memory usage
- Very fast and simple implementation
- Early termination when end is reachable

## Limitations

- Assumes non-negative integers only
- Does not output the actual path (only if reachable)

## Variations

- Jump Game II – Find minimum number of jumps to reach the end
- Jump Game III – Jump forward/backward with specific rules

## Related Problems

- Minimum jumps to reach end
- Maximum sum with jumps
- Frog jump problem
