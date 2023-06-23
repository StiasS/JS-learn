function random(min,max){
    let rng
    min=+prompt("Задайте минимальное число","");
    max=+prompt("Задайте максимальное число","");
    rng=Math.random();
    return min+rng*(max-min);
}
alert (random())