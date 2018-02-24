module.exports = function getZerosCount(number, base) {
    // your implementation
    var num = 0;
    var arr = [];
    for (var i = 2; i < base / 2; i++) {
        for (var j = Math.floor(base / 2); j > i && i * j >= base; j--) {
            if (i * j == base) {
                arr.push([i, j]);
            }
        }
    }


    var milestone = (arr.length) ? arr[arr.length - 1][1] : base;

    for (var i = milestone; i <= number; i += milestone) {
        num++;
        var j = i;
        j /= milestone;
        while (j % milestone == 0) {
            j /= milestone;
            num++;
        }
    }

    return num;
}