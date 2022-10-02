def twoSum(nums, target):
  len_nums=len(nums)
  for i in range(len_nums):
    for j in range(i+1, len_nums):
      if(nums[i] + nums[j] == target):
        return[i,j]


result=twoSum([2, 11, 7, 15], 9)
print(result)
