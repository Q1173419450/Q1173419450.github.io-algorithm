function isSorted(arr){
  for(let i=0;i<arr.length;i++){
    if(arr[i] <= arr[i+1]){
      return 1
    } else if(arr[i] > arr[i+1]){
      console.log(arr);
      return arr
    } else{
      return 0
    }
  }
}
var num1 = isSorted([0, 1, 2, 2]);
console.log(num1);
var num2 = isSorted([4, 3, 2]);
console.log(num2);
var num3 = isSorted([4, 3, 5]);
console.log(num3);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
 
function isSorted(arr){
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i-1] - arr[i]) : direction;
    if(i === arr.length - 1) {
      return !direction ? 0 : direction;
    } else if((val - arr[i+1]) * direction > 0) {
      return 0
    }
  }
}


