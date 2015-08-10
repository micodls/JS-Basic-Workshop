function randomInteger(min, maxO) {
    max = (typeof maxO === 'undefined') ? min : max;
    min = (typeof maxO === 'undefined') ? 0 : min;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.randomInteger = randomInteger;