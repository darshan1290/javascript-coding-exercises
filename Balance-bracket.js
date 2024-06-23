function isBalance(str) {
  let arrBrackets = [];
  let arrOpeningBrackets = ["{", "[", "("];

  if (str) {
    for (let intI = 0; intI < str.length; intI++) {
      if (arrOpeningBrackets.includes(str[intI])) {
        arrBrackets.push(str[intI]);
        continue;
      }

      if (arrBrackets.length === 0) {
        return false;
      }

      let removeCharacter;
      switch (str[intI]) {
        case "}":
          removeCharacter = arrBrackets.pop();
          if (removeCharacter !== "{") {
            return false;
          }
          break;

        case "]":
          removeCharacter = arrBrackets.pop();
          if (removeCharacter !== "[") {
            return false;
          }
          break;
        case ")":
          removeCharacter = arrBrackets.pop();
          if (removeCharacter !== "(") {
            return false;
          }
          break;
      }
    }
    return arrBrackets.length === 0;
  }
  return true;
}

const isBracketBalance = isBalance("[()]{");
console.log(isBracketBalance);
