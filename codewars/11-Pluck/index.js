function pluck(objs, name) {
    let arr = [];
    
    for (let i = 0; i < objs.length; ++i) {
      arr.push(objs[i][name] || undefined)
    }
    
    return arr;
}