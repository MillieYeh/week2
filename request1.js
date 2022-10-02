function calculate(min, max, step){
  var sum = 0;
  for(var i= min; i<max+1; i+= step){
    sum+=i;
  }
  alert(sum);
}

calculate(1, 3, 1);
calculate(4, 8, 2);
calculate(-1, 2, 2);
