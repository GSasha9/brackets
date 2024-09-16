module.exports = function check(str, bracketsConfig) {
  //если в строке нечетное кол-во символов - возвращаем false
  if(str.length%2 != 0){
    return false;
  }
  
  
  let openBrackets = [];
  let closeBrackets = [];

  let arr = [];

  bracketsConfig.forEach(([open, close]) => {
  openBrackets.push(open);
  closeBrackets.push(close);
  });

  for (let bracket of str) {
    if (openBrackets.includes(bracket)) {
      arr.push(bracket);
    } 
    else {
      let lastOpenBracket = arr.pop();
      let compareCloseBracket = closeBrackets[openBrackets.indexOf(lastOpenBracket)];
      if (bracket !== compareCloseBracket) {
        return false;
      }
    }
  }

return arr.length === 0;


}

