function func(a){
  function add(b,c) {
      console.log(a + (b*c)); 
  }
  return add;
}

func(2)(3, 4);
func(5)(1, -5);
func(-3)(2, 9);
