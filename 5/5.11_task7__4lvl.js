function getSecondsToTomorrow(){
    let date=new Date();
    return alert(24*3600-date.getHours()*3600-date.getMinutes()*60-date.getSeconds())
}
getSecondsToTomorrow() 