let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
function topSalary(salaries){
    let maxSalary = 0;
    let topEarner = null;
    for (let [name,salary] of Object.entries(salaries)) {
        if (maxSalary<salary){
            maxSalary=salary;
            topEarner=name
        };
    }
    return topEarner;
}
alert (topSalary(salaries))