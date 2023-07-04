function printReverseList(list) {
    let arr=[];
    let vrem = list;
    while (vrem) {
      arr.push(vrem.value);
      vrem = vrem.next;
    }
    for(let i=arr.length-1;i>=0;i--){
        alert(arr[i]);
    }
}
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};
printReverseList(list)