const repeatString = function(string, num) {
    let str = string; 
    if (num <0) {
        return 'ERROR';
    }
    for (i = 0; i <= num; i++){   
        return str.repeat(num) + '';
    }
};

// Do not edit below this line
module.exports = repeatString;
