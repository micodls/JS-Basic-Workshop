function triangleArea(input) {
    var s = input.reduce(function (prev, curr) {
        return prev + curr;
    })/2;

    return Math.sqrt(input.reduce(function (prev, curr) {
        return prev * (s - curr);
    }, s));
}

module.exports.triangleArea = triangleArea;