function random(min,max){
    let rng
    min=+prompt("Задайте минимальное число","");
    max=+prompt("Задайте максимальное число","");
    rng=Math.random();
    return Math.floor(min+rng*(max+1-min));//целые
}
alert (random())