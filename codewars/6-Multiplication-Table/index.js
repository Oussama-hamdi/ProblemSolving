const multiplicationTable = function(size) {
    const arr = [];
    
    for(let i = 0; i < size; ++i) {
      arr.push([]);
  
      for (let j = 1; j <= size; ++j) {
        arr[i].push(j * (i + 1));
      }
    }
    
    return arr;
}  