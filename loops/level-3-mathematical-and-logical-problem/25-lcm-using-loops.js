// Find LCM of two numbers using loops.
function findLCM(a, b) {
  let max = Math.max(a, b);

  for (let i = max; ; i++) {
    if (i % a === 0 && i % b === 0) {
      return i;
    }
  }
}

findLCM(4, 6); 
