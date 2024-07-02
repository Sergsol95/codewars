
//https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
    while (n > 9) {
    let total = 0;
    n = n + "";
    n.split('');
    for (let i = 0; i < n.length; i++) {
      total += +n[i]
    }
    n = total
  }
    return n
  }
  