const sumAll = function(a, b) {
    let sum = 0;

    if (Number.isInteger(a) == false) {
        return "ERROR";
    }
    if (Number.isInteger(b) == false) {
        return "ERROR";
    }
    if (a < 0) {
        return "ERROR";
    }

    if (a < b) {

        for (a = a; a <= b; a++) {
            sum = sum + a;
            console.log(sum);
        };
    } else {
        for (b = b; b <= a; b++) {
            sum = sum + b;
            console.log(sum);
        }
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
