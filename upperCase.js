function upperCase(input) {
    return (''+input).split(' ').map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

module.exports.upperCase = upperCase;