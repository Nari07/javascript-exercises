const sumAll = function(x, y) { 

    if (x < 0 || y < 0 || typeof(x) != 'number'|| typeof(y) != 'number' ) {
        return 'ERROR';
    }

    let sum = 0;
    if (x <= y) {
        while (x <= y) {
          sum += x;
          x++;
        }
    }
    else  {
        while (x >= y) {
           sum += x;
           x--;
         }
      }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;


// i am dumb dumb