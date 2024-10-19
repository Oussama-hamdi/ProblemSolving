function repeats(arr){
    let sum = 0;
    let mySet = [...new Set(arr)];
    
    for (let i = 0; i < mySet.length; ++i) {
      let currNum = mySet[i];
      if (arr.indexOf(currNum) === arr.lastIndexOf(currNum)) {
        sum += currNum;
      }
    }
    
    return sum;
};