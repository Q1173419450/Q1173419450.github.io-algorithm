var twoSum = function(nums, target) {
  var nums = [...new Set(nums)]
  console.log(nums);

  for(let i=0; i<nums.length; i++) {
    for(let j=i+1; j<nums.length; j++) {
      if(arr[i] + arr[j] == target) {
        var numArr = [];
        numArr.push(i, j)
        return numArr
      }
    }
  }  
};

// var twoSum = function(nums, target) {
//   var i,j,len = nums.length;
//   var hash = {};
//   for (i=0;i<len;i++) {
//       j = target-nums[i];
//       console.log(j);
//       if (hash[j] !== undefined)
//           return [i,hash[j]];
//       else 
//           hash[nums[i]] = i;
//   }
// };

// var twoSum = function(nums, target) {
    
//   let records = new Map();
  
//   for (const [index, num] of nums.entries()) {
//       let compliment = target - nums[index];
      
//       // compliment found in map
//       console.log(records.has(compliment))
//       if (records.has(compliment)) {
//           return [records.get(compliment), index];
//       }
      
//       // add the number in map if not found
//       records.set(nums[index], index);   
//   }

// };

let nums = [2, 3, 12, 7, 15, 15,  14];
let target = 16;

console.log(twoSum(nums, target));