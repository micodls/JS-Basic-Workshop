function highLow(input) {
    var result = [];
    // min
    result.push(input.reduce(function (a, b) {
        return a < b ? a : b;
    }));

    // max - reuse highest value
    result.push(require('./highestValue.js').highestValue(input));
    return result
}

module.exports.highLow = highLow;