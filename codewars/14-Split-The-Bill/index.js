function splitTheBill(x) {
    let totalBill = 0;
    let friendsNum = 0;

    for (let i in x) {
      totalBill += x[i];
      ++friendsNum;
    }
  
    let average = totalBill / friendsNum;
    
    for (let i in x) {
      x[i] = Math.round((x[i] - average) * 100) / 100;
    }
    
    
    return x;
}