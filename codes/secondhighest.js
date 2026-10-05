function getSecondHighest(arr) {
  let highest = -Infinity;
  let secondHighest = -Infinity;

  for (let num of arr) {
    if (num > highest) {
      // The old highest becomes the second highest
      secondHighest = highest; 
      highest = num;
    } else if (num > secondHighest && num < highest) {
      // Found a new number that sits between highest and secondHighest
      secondHighest = num;
    }
  }

  // Return null if a valid second highest doesn't exist (e.g., all numbers are identical)
  return secondHighest === -Infinity ? null : secondHighest;
}

console.log(getSecondHighest([10, 5, 20, 20, 8])); // Output: 10
console.log(getSecondHighest([10, 10, 10])); 
console.log(getSecondHighest([10, 100, 1000])); 