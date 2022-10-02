function twoSum(nums, target){
  var length = nums.length;
  for(var i=0; i < length; i++){
    for(var j=i+1; j < length; j++){
      if(nums[i] + nums[j] == target){
        return[i,j];
      }
    }    
  }
}
let result=twoSum([2, 11, 7, 15], 9);
console.log(result); 
