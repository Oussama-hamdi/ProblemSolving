function explode(s) {
    s = s.replace(/0/g, '');
    
    let newStr = '';
    
    for (let i = 0; i < s.length; ++i) {
      newStr += s[i].repeat(+s[i]);
    }
    
    return newStr;
}