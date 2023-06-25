function getMaxSubSum(arr){
    let maxSum=0;
    for (let i = 0; i < arr.length; i++) {
        let sumStartPoint = 0 ;
        for (let j = i; j < arr.length; j++) {
            sumStartPoint += arr[j];
            maxSum = Math.max(maxSum, sumStartPoint);
        }
    }  return maxSum;
}