//First Way
var a = 5;
var b = 7;
//console.log("Before Swap: a = ", a, ",b = ", b);

var temp = a;
a = b;
b = temp;
//console.log("After Swap: a = ", a, ",b = ", b);


//Second Way
var x = 5;
var y = 7;
x = x + y;
//console.log("x = ", x);
y = x - y;
//console.log("y = ", y);
x = x - y;
//console.log("x = ",x);

//console.log("After Swap: x = ", x, ",y = ", y);


//Third Way

var p = 5;
var q = 7;
[p,q] = [q,p];
console.log("After Swap: p = ", p, ",q = ", q);