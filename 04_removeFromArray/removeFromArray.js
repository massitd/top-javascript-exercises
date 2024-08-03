const removeFromArray = function(arr, ...remove) {
    arr = arr.filter(item => !remove.includes(item));
    console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
