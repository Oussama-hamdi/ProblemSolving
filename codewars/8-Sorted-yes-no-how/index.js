function isSortedAndHow(array) {
    const sortedArr = [...array].sort((a, b) => a - b);
  
    if (array.join('') === sortedArr.join('')) {
      return "yes, ascending";
    } else if (array.join('') === sortedArr.reverse().join('')) {
      return "yes, descending";
    } else {
      return "no";
    }
}