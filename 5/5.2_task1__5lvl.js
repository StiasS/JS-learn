function Plus(){
    this.read=function(){
        this.a=+prompt("Введите первое число","0");
        this.b=+prompt("Введите второе число","0");
    };
    this.sum=function(){
        return this.a+this.b;
    }
}
Plus.read();
alert('Сумма: ' + Plus.sum())//хз зачем парился можно проще ну уже как сделал)