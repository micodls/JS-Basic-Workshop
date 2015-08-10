function triangleArea(input) {
    var semiperimeter = input.reduce(function (prev, curr) {
        return prev + curr;
    })/2;

    return Math.sqrt(input.reduce(function (prev, curr) {
        return prev * (semiperimeter - curr);
    }, semiperimeter));
}

module.exports.triangleArea = triangleArea;