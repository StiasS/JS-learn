let username=promt("Кто там?")
if (username==="Админ"){
    let pass=promt("Пароль?")
    if (pass==="Я Главный"){
        alert("Здраствуйте")
    }else if (pass===null){
        alert("Отменено")
    }else{
        alert("Неверный пароль")
    } 
}else if (username===null){
    alert("Отменено")
}else{
    alert("Неверный логин")
}
