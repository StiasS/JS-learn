function truncate(str, maxlength){
    if (str.length>maxlength)
    return str.slice(maxlength)+"...";
    else return str
}