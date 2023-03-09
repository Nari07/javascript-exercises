const fibonacci = function(num) {
    let arr = [0, 1];
    let sum = 0;

    function add2nums(){
        let a = arr[arr.length - 1];
        let b = arr[arr.length - 2];
        sum = a + b;
        arr.push(sum);
        return (arr);
      }
      
    num = parseInt(num);
    if(num < 0){
        return ("OOPS")
    } else if (num > arr.length -1 && num > 0){
        for (i = 0; i <= num; i++){
            add2nums();
        }
        return (arr[num]);
    }else {
        return (arr[num]);
    }
      
};

// Do not edit below this line
module.exports = fibonacci;
