function filterRange(arr, a, b){
    let filtred=[];
    arr.forEach(function(item, index, array) {
        if (item>=a && item<=b)
        filtred.push(item)
    });
    return filtered;
}