let z = {};
function A() { return z; }
function B() { return z; }

alert( new A() == new B() );