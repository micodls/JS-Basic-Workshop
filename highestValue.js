function highestValue(input) {
    return input.reduce(function (a, b) {
        return a > b ? a : b;
    });
}

module.exports.highestValue = highestValue;