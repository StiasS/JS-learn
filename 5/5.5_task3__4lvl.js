function filterRangeInPlace(arr, a, b){
    for (let i = arr.length - 1; i >= 0; i--) {
        let item = arr[i];
        if (item<a || item>b)
        arr.splice(i, 1);
    }
    return arr;
}