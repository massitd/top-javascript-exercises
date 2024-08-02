const repeatString = function(string, num) {
    let loopString = "";
    
    if (num < 0) {
        loopString = "ERROR";
    }

    for (let i = 0; i < num; i++) {
        loopString = loopString + string;
    }

    return loopString;
}
// Do not edit below this line
module.exports = repeatString;
