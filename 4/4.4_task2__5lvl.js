let calculator = {
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
    read() {
        this.a=+prompt("Задайте а" , 0 );
        this.b=+prompt("Задайте б" , 0 );
    }
};    
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );