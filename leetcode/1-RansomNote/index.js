/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let canConstruct = function (ransomNote, magazine) {
  let magArr = [...magazine];

  for (let i = 0; i < ransomNote.length; ++i) {
    if (magArr.indexOf(ransomNote[i]) !== -1) {
      magArr.splice(magArr.indexOf(ransomNote[i]), 1);
    } else {
      return false;
    }
  }

  return true;
};
