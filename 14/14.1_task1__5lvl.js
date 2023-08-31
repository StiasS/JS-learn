let user = {
    name: "John"
  };
  
  function wrap(target) {
  return new Proxy(target, {
      get(target,prop,reciever){
        if (prop in target){
          return Reflect.get(target,prop,reciever)
        }else{
          throw new ReferenceError('Ошибка: такого свойства не существует')
        }}
  });
}

  
  user = wrap(user);
  
  alert(user.name); // John
  alert(user.age); // Ошибка: такого свойства не существует