def maxProduct(nums):
  max = nums[0]*nums[1]
  all_product = len(nums)
  for i in range(all_product):
    for j in range(i+1, all_product):
      mul = nums[i] * nums[j]
      if(mul>max):
        max = mul
  print(max)

  

maxProduct([5, 20, 2, 6]) 
maxProduct([10, -20, 0, 3])
maxProduct([10, -20, 0, -3])
maxProduct([-1, 2])
maxProduct([-1, 0, 2])
maxProduct([5,-1, -2, 0])
maxProduct([-5, -2])
