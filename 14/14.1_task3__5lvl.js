function makeObservable(target) {
    user = new Proxy(target){
        get(target,prop,receiver){

        }
    }
  }
  
  let user = {};
  user = makeObservable(user);
  
  user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
  });
  
  user.name = "John"; 


