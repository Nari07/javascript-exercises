const removeFromArray = function(arr, ...num) {

    // ret = [1,4];

    let ret = arr.filter(arg => !  num.includes(arg));
    return ret;

    // let input = arr;

    // //num = [3,2]
    // num.forEach(remove);

    // function remove(arg) {
    //     let ind = input.indexOf(arg);
    //     if(ind > -1) {
    //         input.splice(ind, 1);
    //     }
        
        
    // }
        
    // return input; 
};

//expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);

// Do not edit below this line
module.exports = removeFromArray;
