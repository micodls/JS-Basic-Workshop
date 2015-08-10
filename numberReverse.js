function numberReverse(input) {
    return (''+input).split('').reverse().reduce(function (a, b) {
        return a.concat(b);
    })
}

module.exports.numberReverse = numberReverse;