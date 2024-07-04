https://www.codewars.com/kata/56269eb78ad2e4ced1000013


function findNextSquare(sq) {
    let number = Math.sqrt(sq);
    if (Number.isInteger(number)) {
      number = number + 1;
      return number * number;
    }
    return -1;
  }