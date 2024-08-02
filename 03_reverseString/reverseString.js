const reverseString = function(str) {
    let strArr = str.split('');
    strArr = strArr.reverse();
    reversed = strArr.join('');
    console.log(reversed);
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;