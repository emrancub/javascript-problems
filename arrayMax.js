/** 
var marks = [56, 47, 78, 90, 35, 27, 47];

var max = marks[0];

for(var i = 0; i< marks.length; i++){
    var element = marks[i];
    if(element>max){
        max = element;
    }
}
console.log(max);
*/

var numbers = [12, 45, 65, 21, 6, 68];
var smallest = numbers[0];
for(var i = 0; i < numbers.length; i++){
    var num = numbers[i];
    if(num<smallest
){
        smallest = num;
    }
}
console.log(smallest)