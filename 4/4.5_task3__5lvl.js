function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
        this.value = +prompt('Введите число:', 0);
    };
  }
  var accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);