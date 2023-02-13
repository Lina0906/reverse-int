module.exports = function reverse(n) {
    
    if (n < 0) {n = n*-1};
    {n};

    const stringNumber = n.toString();
    let reversedStringArr = [];

    for (let i=0; i<=stringNumber.length-1; i++) {
        reversedStringArr.push(stringNumber[stringNumber.length-1-i]);
    }

    return reversedStringArr.join('') * 1;
}


