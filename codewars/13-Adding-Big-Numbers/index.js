function add(a, b) {
    let str = "";
    let maxLength = Math.max(a.length, b.length);
  
    a = a.padStart(maxLength, "0");
    b = b.padStart(maxLength, "0");
  
    let carry = 0;
  
    for (let i = maxLength - 1; i >= 0; i--) {
      let validNumA = +a[i];
      let validNumB = +b[i];
      let sum = validNumA + validNumB + carry;
  
      str += sum % 10;
      carry = Math.floor(sum / 10);
    }
  
    if (carry) {
      str += carry;
    }
  
    return str.split("").reverse().join("");
}