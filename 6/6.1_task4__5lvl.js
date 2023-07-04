function printList(list) {
    let vrem = list;
    while (vrem) {
      alert(vrem.value);
      vrem = vrem.next;
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
printList(list)