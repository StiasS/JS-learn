Function.prototype.defer=function(a,b,ms){
    setTimeout(this,ms);
};
function f(a, b) {
    alert( a + b );
  }
  
f.defer(1,2,1000); 