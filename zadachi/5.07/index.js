https://www.codewars.com/kata/5277c8a221e209d3f6000b56

function validBraces(str) {
    const stack = [];
    const matchingBraces = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
  
    for (let char of str) {
      if (matchingBraces[char]) {
        stack.push(char);
      } else {
        const last = stack.pop();
        if (matchingBraces[last] !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }