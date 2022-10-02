def func(a):
  def addone(b, c):
      print(a+(b*c))
  return addone


func(2)(3, 4)
func(5)(1, -5)
func(-3)(2, 9) 
