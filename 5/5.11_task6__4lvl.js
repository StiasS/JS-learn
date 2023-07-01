function getSecondsToday(){
    let date=new Date();
    return alert(date.getHours()*3600+date.getMinutes()*60+date.getSeconds())
}
getSecondsToday()