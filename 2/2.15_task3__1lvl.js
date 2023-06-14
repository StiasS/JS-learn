function min(a,b){
    if(a>b){
        return b;
    }else if (b>a) {
        return a;
    }else if (b==a){
        alert("они равны")
        return a;
    }
}
min(2, 5)
min(3, -1)
min(1, 1)