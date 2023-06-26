function Unique(arr) {
    let unique = new Set();
    arr.forEach(item => {
      let words = item.split(' ');
      words.forEach(word => {
        unique.add(word);
      });
    });
    return Array.from(unique);
}
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
alert(strings)
  