function printNumbers(from, to){
    let i=from;
    function type(){
        alert (i);
        if (i<to){
            i++;
            let timerid=setTimeout(type, 1000);
            if(i>to){
                clearTimeout(timerid);
            }
        }
    }
    type();
}
printNumbers(1,5)