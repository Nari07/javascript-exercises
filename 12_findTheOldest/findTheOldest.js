const findTheOldest = function(arr) {
    let result = arr.reduce(function(acc, current){
        if (acc.yearOfDeath === undefined){
            acc.yearOfDeath =  new Date().getFullYear();
        } else if (current.yearOfDeath === undefined){
            current.yearOfDeath = new Date().getFullYear();
        } 

        let currentAge = (current.yearOfDeath - current.yearOfBirth);
        let prevAge = (acc.yearOfDeath - acc.yearOfBirth);

         if (currentAge > prevAge){ //if age of current value > age of previous value, set previous value to current object
            acc = current;
        } 
        return acc; //return current object with oldest age
     })
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
