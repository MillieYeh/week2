function avg(data){
  var sum = 0;
  var dog_num = 0;
  var list = data["employees"];
  var avg_salary = 0;
  
  for(var i = 0; i < list.length; i++){
    if (list[i]["manager"] == false){
      sum += list[i]["salary"];
      dog_num += 1;
    }
  }
  avg_salary = sum/dog_num;
  console.log(avg_salary); 
}

avg({
"employees":[
{
"name":"John",
"salary":30000,
"manager":false },
{
"name":"Bob",
"salary":60000,
"manager":true },
{
"name":"Jenny",
"salary":50000,
"manager":false },
{
"name":"Tony",
"salary":40000,
"manager":false }
]
});
