const palindromes = function (word) {
    let newArr = word.toLowerCase().split("");
    let palArr = [];
    
    let filteredWord = newArr.filter(function(value) {
    return value != "," && value != "." && value != "!" && value != "?" && value != "/" && value != " " 
    // return !newArr.includes('!') && !newArr.includes('?') && !newArr.includes('.') && !newArr.includes('/') && !newArr.includes(',') && !newArr.includes(';') && !.newArr.includes(' ')  can also do this way
   })
   
    for (i = filteredWord.length - 1; i >= 0; i--){
        palArr.push(filteredWord[i]);
    }
    return filteredWord.toString() == palArr.toString() ? true : false; 
};

// console.log(palindromes("Racecar"));

// Do not edit below this line
module.exports = palindromes;
