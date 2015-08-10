function alphabeticalOrder(input) {
    return (''+input).split('').sort().join('');
}

module.exports.alphabeticalOrder = alphabeticalOrder;