let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
let collator = new Intl.Collator()
alert(collator.sort(animals))