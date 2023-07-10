function delay(f, ms) {
    return function(...args) {
      setTimeout(() => {
        f.apply(this, args);
      }, ms);
    };
}
let f1000 = delay(alert, 1000);
let f1500 = delay(alert, 1500);
f1000("test");
f1500("test");