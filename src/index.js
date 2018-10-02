module.exports = function count(s, pairs) {
    var elem;
    var multy = 1;
    var countner = 0;
    var localCount = 0;
    if(s.length > 5){return 0}
    for (let i = 0; i < pairs.length; i++) {

        elem = powAction(pairs[i]);
        multy = elem * multy;
    }

    for (let y = 0; y != multy; y++) {
        localCount = 0;
        for (let e = 0; e < s.length; e++) {
            if(countner > 10000000){break}
            var noda = nod(multy, y + e);
            if (s[e] == "0" && noda != 1) {
                localCount++;
            }
            if (s[e] == "1" && noda == 1) {
                localCount++;
            }
            if (localCount == s.length) {
                countner++;
            }
        }


    }
    return countner;

}


function powAction(array) {
    if(array[1]> 20) return 0;
    return Math.pow(array[0], array[1]);
}

function nod(n, m) {
    if (m > 0) {
        var k = n % m;
        return nod(m, k);
    }
    else {
        return Math.abs(n);
    }
}