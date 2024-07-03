https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers){
    let odd = 0;
    let even = 0;
    let oddTotal = 0;
    let evenTotal = 0;
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
      even = integers[i]
      evenTotal++;
        }
      else {odd = integers[i];
      oddTotal++;}
    }
    if (oddTotal > evenTotal) return even
    else return odd
  }