let head = {
    glasses: 1
    };
  
  let table = {
    __proto__: head,
    pen: 3
    };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
  };
  
  let pockets = {
    money: 2000,
    __proto__:bed
  };
alert(pockets.pen)
alert(bed.glasses)