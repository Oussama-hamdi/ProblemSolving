function alphabetWar(fight)
{
  const leftSide = {w: 4, p: 3, b: 2, s: 1};
  const rightSide = {m: 4, q: 3, d: 2, z: 1};
  
  let leftCount = 0;
  let rightCount = 0;
  
  for (let i = 0; i < fight.length; ++i) {
    if (leftSide[fight[i]]) {
      leftCount += leftSide[fight[i]];
    } else if (rightSide[fight[i]]) {
      rightCount += rightSide[fight[i]];
    }
  }
  
  return leftCount === rightCount ? "Let's fight again!" : leftCount > rightCount ? "Left side wins!" : "Right side wins!";
}