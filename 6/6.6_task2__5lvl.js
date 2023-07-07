function sum(a){
    let cur=a
    function addNumber(b){
        cur+=b;
        return addNumber;
    };
    addNumber.toString = function(){
        return cur;
    };
    return addNumber;
}
alert(sum(1)(2)(3)(4)); // 10
alert(sum(5)(10)(15)); // 30
alert(sum(2)(4)(6)(8)(10)); // 30