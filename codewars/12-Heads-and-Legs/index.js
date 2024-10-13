function animals(heads, legs){
    if (heads < 0 || legs < 0 || legs % 2 !== 0) return 'No solutions';
    
    let cows = (legs - 2 * heads) / 2;
    
    let chickens = heads - cows;
    
    if (cows >= 0 && chickens >= 0) {
          return [chickens, cows];
      } else {
          return "No solutions";
      }
}
