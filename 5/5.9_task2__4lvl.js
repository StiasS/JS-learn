function count(obj){
    let i=0
    for (let slova of Object.values(obj)) {
        i++;
    }
    return i
}
let user = {
    name: 'John',
    age: 30
  };
  
  alert( count(user) ); // 2