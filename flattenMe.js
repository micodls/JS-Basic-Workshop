function flattenMe(input) {
    var flat = [];
    input.forEach(function (element) {
        if (element instanceof Array) {
            flat = flat.concat(flattenMe(element))
        }
        else {
            flat.push(element);
        }
    });
    return flat;
}

module.exports.flattenMe = flattenMe;