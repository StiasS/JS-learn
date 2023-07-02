let user = {
    name: "Василий Иванович",
    age: 35
  };
let json=JSON.stringify(user);
alert(json)
let userCopy=JSON.parse(json)
