function isEven(n) {
    n = Math.abs(n); // Convert to positive
    if (n == 0) return true;
    if (n == 1) return false;
    return isEven(n - 2);
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → false