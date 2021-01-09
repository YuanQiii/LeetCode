// var twoSum = function(nums, target) {
//   for(let i=0; i<nums.length; i++){
//       let val = target - nums[i],
//           index = nums.indexOf(val)
//       if(index !== -1 && index !== i){
//           return [i, nums.indexOf(val)]
//       }
//   }
//   return []
// };

var twoSum = function(nums, target){
  for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
  return []
}