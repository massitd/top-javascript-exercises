const removeFromArray = function(arr, ...filter) {
    arr.forEach(i => {
        if (arr[i] == filter){
            arr.splice(i, 1);
        }
    });
    console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
