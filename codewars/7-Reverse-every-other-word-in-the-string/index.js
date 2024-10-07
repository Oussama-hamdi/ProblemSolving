function reverse(str){
    if (!str.trim()) return '';
  
    const strArr = str.split(' ');
    
    for (let i = 0; i < strArr.length; ++i) {
      if (i % 2 === 1) {
        strArr[i] = strArr[i].split('').reverse().join('');
      }
    }
    
    return strArr.join(' ');
}