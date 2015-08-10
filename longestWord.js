function longestWord(input) {
    return (''+input).split(' ').reduce(function (word1, word2) {
        return word1.length > word2.length ? word1 : word2;
    }).length;
}

module.exports.longestWord = longestWord;