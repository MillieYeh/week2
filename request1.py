def calculate(min, max, step):
    sum=0
    for i in range(min, max+1, step):
        sum=sum+i

    print(sum)

calculate(1, 3, 1)
calculate(4, 8, 2)
calculate(-1, 2, 2)
