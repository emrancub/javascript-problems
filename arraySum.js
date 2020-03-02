var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allNames = "";
for(var i = 0; i< friends.length;i++){
    var name = friends[i];
    allNames = allNames+name
;
}
console.log(allNames);


/** 
function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 78, 35, 94, 23, 76];
var result = getArraySum(numbers);
console.log("The sum of the total numbers: ", result);

var total = getArraySum([10, 20, 30, 40]);
console.log("The sum of the total numbers: ",total);

*/


/** 
var numbers = [45, 78, 35, 94, 23, 76];
var sum = 0;
for(var i = 0; i<numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log("The sum of the total numbers: ", sum);
*/