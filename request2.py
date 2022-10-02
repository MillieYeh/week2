def avg(data):
  sum = 0
  dog_num = 0
  #計算字串、列表、字典、元組的長度
  total_people= len(data["employees"])
  for i in range(total_people):
    if (data["employees"][i]["manager"] == False):
      sum += data["employees"][i]["salary"]
      dog_num += 1
  avg_salary = sum/dog_num
  print("avg_salary= %d" %avg_salary)
  


avg({
"employees":[ 
  {
    "name":"John", 
    "salary":30000, 
    "manager":False
  },
  {
    "name":"Bob", 
    "salary":60000, 
    "manager":True
  }, 
  {
    "name":"Jenny", 
    "salary":50000, 
    "manager":False
  }, 
  {
    "name":"Tony", 
    "salary":40000, 
    "manager":False
  } 
]
}) 
