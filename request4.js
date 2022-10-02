function maxProduct(nums){
  var max = nums[0]*nums[1];
  var length = nums.length;
  var mul;
  for(var i=0; i < length; i++){
    for(var j=i+1; j < length; j++){
      mul = nums[i] * nums[j];
      if(mul>max){
        max = mul;
      }
    }
  }
  console.log(max);
}

maxProduct([5, 20, 2, 6])
maxProduct([10, -20, 0, 3])
maxProduct([10, -20, 0, -3])
maxProduct([-1, 2])
maxProduct([-1, 0, 2])
maxProduct([5, -1, -2, 0])
maxProduct([-5, -2])
