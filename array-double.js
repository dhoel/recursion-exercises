function arrayDouble(arr, arrDouble=[]) {
    if (!arr.length) {
        return arrDouble;
    }
    arrDouble.push(arr.shift() * 2);

    return arrayDouble(arr, arrDouble);

}

arrayDouble([1, 2, 3]);
