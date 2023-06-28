function groupById(arr){
    return arr.reduce((accumulator, currentValue,) =>{
      accumulator.push(`${currentValue.id}:{id: '${currentValue.id}', name: '${currentValue.name}', age: '${currentValue.age}'}\n`);
      return accumulator;
    },[]).join('');
}
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];
let usersById = groupById(users);
alert(usersById);