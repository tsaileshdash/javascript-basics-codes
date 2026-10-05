//Q: Check if two strings are anagrams.

function isAnagram(str1, str2) {
  // Normalize: lowercase and remove non-alphanumeric
  const normalize = str =>
    str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

  return normalize(str1) === normalize(str2);
}

// Test cases
console.log(isAnagram("listen", "silent"));   // true
console.log(isAnagram("rail safety", "fairy tales")); // true
console.log(isAnagram("hello", "world")); 