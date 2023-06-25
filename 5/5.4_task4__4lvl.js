let arr = [ ];
function sumInput(){
    let a =prompt("Введите число","0");
    while (a !== undefined && !isNaN(a)){
        arr.push(+a);
        a =prompt("Введите число","0");
    }let sumArray= function() {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] === 'number') {
            sum += arr[i];
          }
        }
        return sum;
      }
      alert(sumArray());
}
sumInput()