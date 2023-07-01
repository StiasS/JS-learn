let date = new Date(2012, 0, 3);
function getWeekDay(date){
    let den
    if (date.getDay()===1){
      return den="ПН";
    }
    else if (date.getDay()===2){
        return den="ВТ";
    }
    else if (date.getDay()===3){
        return den="СР";
    }
    else if (date.getDay()===4){
        return den="ЧТ";
    }
    else if (date.getDay()===5){
        return den="ПТ";
    }
    else if (date.getDay()===6){
        return den="СБ";
    }
    else {return den="ВС";
  }
}
alert( getWeekDay(date) );