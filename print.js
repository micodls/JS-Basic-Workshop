function print() {
    function doTimeout(i) {
        setTimeout(function() {
            console.log(i);
        }, 1000 + i);
    }

    for (var i = 0; i < 10; ++i) {
        doTimeout(i);
    }
}

module.exports.print = print;