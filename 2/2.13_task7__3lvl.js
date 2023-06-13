let n=prompt("Введите любой число");
slojna:for(let i=2;i<=n;i++){
    for(let k=2;k<i;k++){
        if(i%k==0)continue slojna
    }
    alert(i)
}