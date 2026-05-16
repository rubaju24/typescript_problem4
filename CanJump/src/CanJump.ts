const canJump = (arr: number[]): boolean => {
  let maxReach = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + arr[i]!);
    if (maxReach >= n - 1) {
      return true;
    }
  }

  return false;
};
console.log(canJump([2, 3, 1, 1, 4]));
