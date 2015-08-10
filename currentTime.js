function currentTime(input) {
    setInterval(function () {
        var date = new Date().toTimeString().split(' ')[0];
        console.log(date);
    }, 1000);
}

module.exports.currentTime = currentTime;