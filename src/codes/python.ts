export default [
  {
    title: `1. Python program to demonstrate simple hello world text.`,
    code: `#print method to display string
  print('Hello World');
  # OUTPUT
  # Hello World
  `,
  },
  {
    title: `2. Program on assigning multiple values to multiple variables`,
    code: `a,b,c=5,10,15
  print(a)
  print(b)
  print(c)
  # OUTPUT
  # 5
  # 10
  # 15
  `,
  },
  {
    title: `3. Program to define values of different data types and checking its type.`,
    code: `a=10
  b="Hi Python"
  c = 10.5
  print(type(a));
  print(type(b));
  print(type(c));
  `,
  },
  {
    title: `4. Program to demonstrate simple string handling`,
    code: `str1 = 'Deccan College ' #string str1
  str2 = ' Of Engineering & Tech.' #string str2
  print (str1[0:2]) #printing first two character using slice operator
  print (str1[4]) #printing 4th character of the string
  print (str1*2) #printing the string twice
  print (str1 + str2) #printing the concatenation of str1 and str2
  # OUTPUT:
  # De
  # a
  # Deccan College Deccan College
  # Deccan College Of Engineering & Tech.
  `,
  },
  {
    title: `5. Program to demonstrate LIST.`,
    code: `li = [1, "hi", "python", 2]
  print (li[3:]);
  print (li[0:2]);
  print (li);
  print (li + li);
  print (li * 3);
  # OUTPUT:
  # [2]
  # [1, 'hi']
  # [1, 'hi', 'python', 2]
  # [1, 'hi', 'python', 2, 1, 'hi', 'python', 2]
  # [1, 'hi', 'python', 2, 1, 'hi', 'python', 2, 1, 'hi', 'python', 2]
  `,
  },
  {
    title: `6. Program to demonstrate tuple`,
    code: `tu = ("hi", "python", 2)
  print (tu[1:]);
  print (tu[0:1]);
  print (tu);
  print (tu + tu);
  print (tu * 3);
  print (type(tu))
  tu[2] = "hi";
  # OUTPUT
  # ('python', 2)
  # ('hi',)
  # ('hi', 'python', 2)
  # ('hi', 'python', 2, 'hi', 'python', 2)
  # ('hi', 'python', 2, 'hi', 'python', 2, 'hi', 'python', 2)
  # <class 'tuple'>
  `,
  },
  {
    title: `7. Program to demonstrate dictionary`,
    code: `d = {1:'Jimmy', 2:'Alex', 3:'john', 4:'mike'};
  print("1st name is "+d[1]);
  print("2nd name is "+ d[4]);
  print (d);
  print (d.keys());
  print (d.values());
  # OUTPUT
  # 1st name is Jimmy
  # 2nd name is mike
  # {1: 'Jimmy', 2: 'Alex', 3: 'john', 4: 'mike'}
  # dict_keys([1, 2, 3, 4])
  # dict_values(['Jimmy', 'Alex', 'john', 'mike'])
  `,
  },
  {
    title: `8. Program to demonstrate simple addition operation using formatted output`,
    code: `num1 = 1.5
  num2 = 6.3
  # Add two numbers
  sum = float(num1) + float(num2)
  # Display the sum
  print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))
  # OUTPUT
  # The sum of 1.5 and 6.3 is 7.8
  `,
  },
  {
    title: `9. Program to demonstrate simple addition operation accept numbers from the keyboard`,
    code: `num1 = int(input('Enter first number: '))
  num2 = int(input('Enter second number: '))
  # Add two numbers
  sum = float(num1) + float(num2)
  # Display the sum
  print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))
  # OUTPUT
  # Enter first number: 3
  # Enter second number: 4
  # The sum of 3 and 4 is 7.0
  `,
  },
  {
    title: `10. Program to demonstrate triple quotation marks`,
    code: `str2='''welcome to
  Deccan College of Engg. & Tech.
  Darus salam,
  HYD-01'''
  print(str2)
  # OUTPUT
  # welcome to
  # Deccan College of Engg. & Tech.
  # Darus salam,
  # HYD-01
  `,
  },
  {
    title: `11. Program to demonstrate input function`,
    code: `name = input("Enter your name: ")
  rno=int(input("Enter Roll no"));
  marks=float(input("enter marks"));
  print('Your name is',name)
  print('Your Roll no is',rno)
  print('Your marks are',marks)
  print(type(name))
  print(type(rno))
  print(type(marks))
  # OUTPUT:
  # Enter your name: mirza
  # Enter Roll no4
  # enter marks500
  # Your name is mirza
  # Your Roll no is 4
  # Your marks are 500.0
  # <class 'str'>
  # <class 'int'>
  # <class 'float'>
  `,
  },
  {
    title: `12. Program to demonstrate inbuilt functions of math package`,
    code: `import math
  print('the e value is',math.e)
  print('the pi value is',math.pi)
  print('the squre roo of 81 is',math.sqrt(81))
  print('the factorial of 6 is',math.factorial(4))
  print('the value of log 10 is',math.log(10))
  print('the value of log 10 and base 10 is',math.log10(10))
  # OUTPUT:
  # the e value is 2.718281828459045
  # the pi value is 3.141592653589793
  # the squre roo of 81 is 9.0
  # the factorial of 6 is 24
  # the value of log 10 is 2.302585092994046
  # the value of log 10 and base 10 is 1.0
  `,
  },
  {
    title: `13. Program to demonstrate arithmetic operations`,
    code: `# 1)Arithemetic Operators(+,-,*,/,//,%,**)
  print(7/3) #-- 2.333
  print(7//3) # 2
  print(7%3) # 1
  print(4**3) # power(64)
  # OUTPUT
  # 2.3333333333333335
  # 2
  # 1
  # 64
  `,
  },
  {
    title: `14. Program to demonstrate relational or Comparison Operators (==,!=,>,<,>=,<=)`,
    code: `Note: Output will be in boolean format only.(True or False)..
  a=67
  b=78
  print(a==b)
  print(a!=b)
  print(a>b)
  print(a<b)
  print(a>=b)
  print(a<=b)
  # OUTPUT
  # False
  # True
  # False
  # True
  # False
  # True
  `,
  },
  {
    title: `15. Program to demonstrate logical operators`,
    code: `a=67
  b=78
  print(a>b and a<b)
  print(a>b or a<b)
  print(not (a>b or a<b))
  # OUTPUT
  # False
  # True
  # False
  `,
  },
  {
    title: `16. Program to demonstrate bitwise operators`,
    code: `a = 60 # 60 = 0011 1100
  b = 13 # 13 = 0000 1101
  print ('a=',a,':',bin(a),'b=',b,':',bin(b))
  c = 0
  c = a & b; # 12 = 0000 1100
  print ("result of AND is ", c,':',bin(c))
  c = a | b; # 61 = 0011 1101
  print ("result of OR is ", c,':',bin(c))
  c = a ^ b; # 49 = 0011 0001
  print ("result of EXOR is ", c,':',bin(c))
  c = ~a; # -61 = 1100 0011
  print ("result of COMPLEMENT is ", c,':',bin(c))
  c = a << 2; # 240 = 1111 0000
  print ("result of LEFT SHIFT is ", c,':',bin(c))
  c = a >> 2; # 15 = 0000 1111
  print ("result of RIGHT SHIFT is ", c,':',bin(c))
  # OUTPUT
  # a= 60 : 0b111100 b= 13 : 0b1101
  # result of AND is 12 : 0b1100
  # result of OR is 61 : 0b111101
  # result of EXOR is 49 : 0b110001
  # result of COMPLEMENT is -61 : -0b111101
  # result of LEFT SHIFT is 240 : 0b11110000
  # result of RIGHT SHIFT is 15 : 0b1111
  `,
  },
  {
    title: `17. Program to display largest of 3 numbers accept numbers from user`,
    code: `a = int(input("Enter a? "));
  b = int(input("Enter b? "));
  c = int(input("Enter c? "));
  if a>b and a>c:
   print("a is largest");
  if b>a and b>c:
   print("b is largest");
  if c>a and c>b:
   print("c is largest");
  # OUTPUT
  # Enter a? 6
  # Enter b? 8
  # Enter c? 2
  # b is largest
  `,
  },
  {
    title: `18. Program to check weather given number is even or odd.`,
    code: `num = int(input("enter the number?"))
  if num%2 == 0:
   print("Number is even...",num)
  else:
   print("Number is odd...",num)
  # OUTPUT
  # enter the number?6
  # Number is even... 6
  `,
  },
  {
    title: `19. Program demonstrate if-elif –else statements accept marks from user`,
    code: `marks = int(input("Enter your marks:-"))
  if (marks>=70):
  print("Distinction")
  elif marks>=60 and marks<70:
  print("Firstclass")
  elif marks>=50 and marks<60:
  print("Second Class")
  else:
  print("Just Pass")
  # OUTPUT
  # Enter your marks:-59
  # Second Class
  `,
  },
  {
    title: `20. Program to demonstrate simple login details.`,
    code: `#USERNAME AND PASSWORD
  uname=input("Enter the username: ")
  pwd=input("Enter the password: ")
  us="deccan"
  pd="cse"
  if (uname==us) & (pwd==pd):
   print('Login successfully')
  else:
   print('Username and password are not correct')
  # OUTPUT
  # Enter the username: deccan
  # Enter the password: cse
  # Login successfully
  `,
  },
  {
    title: `21. Finding sum of natural numbers using while loop`,
    code: `n = int(input("Enter n: "))
  # initialize sum and counter
  sum = 0
  i = 1
  while i <= n:
   sum = sum + i
   i = i+1 # update counter
  # print the sum
  print("The sum is", sum)
  # OUTPUT
  # Enter n: 5
  # The sum is 15
  `,
  },
  {
    title: `22. Program to find sum of all numbers stored in a list using for loop`,
    code: `numbers = [6, 5, 3, 8, 4, 2, 5, 4, 11]
  # variable to store the sum
  sum = 0
  # iterate over the list
  for val in numbers:
  sum = sum+val
  # Output: The sum is 48
  print("The sum is", sum)
  # OUTPUT
  # The sum is 48
  `,
  },
  {
    title: `23. Program to iterate through a list using indexing.`,
    code: `genre = ['ecosports', 'i20','jazz']
  # iterate over the list using index
  for i in range(len(genre)):
  print("I like", genre[i])
  # OUTPUT
  # I like ecosports
  # I like i20
  # I like jazz
  `,
  },
  {
    title: `24. Program demonstrates break statement.`,
    code: `for val in "computers":
   if val == "u":
   break
   print(val)
  print("The end")
  # OUTPUT
  # c
  # o
  # m
  # p
  # The end
  `,
  },
  {
    title: `25. Program to demonstrate continue statement.`,
    code: `for val in "computer":
   if val == "u":
   continue
   print(val)
  print("The end")
  # OUTPUT
  # c
  # o
  # m
  # p
  # t
  # e
  # r
  # The end
  `,
  },
  {
    title: `26. Program to demonstrate simple function`,
    code: `def greet(name):
   """This function greets to
   the person passed in as
   parameter"""
   print("Hello," +name+ "Good morning!")
  greet('baig')
  # OUTPUT
  # Hello,baig Good morning!
  `,
  },
  {
    title: `27. Program to demonstrate simple addition function with return value`,
    code: `a=int(input("Enter First No"));
  b=int(input("Enter second No"));
  def ad():
   c=a+b
   return c
  print('the sum is',ad())
  # OUTPUT
  # Enter First No5
  # Enter second No6
  # the sum is 11
  `,
  },
  {
    title: `28. Program to demonstrate local scope of variable`,
    code: `def disp_message():
   text = "hello !! I am going to print a message."
   # the variable message is local to the function itself
   print(text)
  disp_message()
  print(text) # this will cause an error since a local variable cannot be
  accessible here.
  # OUTPUT:
  # hello !! I am going to print a message.
  # Traceback (most recent call last):
  #  File "C:/Users/MIRZA AHMED BAIG/AppData/Local/Programs/Python/Python37-32/
  # sample.py", line 6, in <module>
  #  print(text) # this will cause an error since a local variable cannot be accessible
  # here.
  # NameError: name 'text' is not defined
  `,
  },
  {
    title: `29. Program to demonstrate global scope of variable`,
    code: `def calculate(*args):
   sum=0
   for arg in args:
   sum = sum +arg 
   print("The sum is",sum)
  sum=0
  calculate(10,20,30) #60 will be printed as the sum
  print("Value of sum outside the function:",sum) # 0 will be printed
  # OUTPUT
  # The sum is 60
  # Value of sum outside the function: 0
  `,
  },
  {
    title: `30. Program to demonstrate recursive function`,
    code: `def refact(x):
   if x==1:
   return 1
   else:
   return(x*refact(x-1))
  num=int(input("no:"))
  if num>=1:
   print('factorial of no is',refact(num))
  # OUTPUT
  # no:3
  # factorial of no is 6
  `,
  },
  {
    title: `31. Program to demonstrate lambda function`,
    code: `#the function table(n) prints the table of n
  def table(n):
   return lambda a:a*n;
  # a will contain the iteration variable i and a multiple of n is returned at each function
  call
  n = int(input("Enter the number?"))
  b = table(n)
   #the entered number is passed into the function table. b will contain a lambda
  function which is called again and again with the iteration variable i
  for i in range(1,11):
   print(n,"X",i,"=",b(i)); #the lambda function b is called with the iteration variable i,
  # OUTPUT
  # Enter the number?4
  # 4 X 1 = 4
  # 4 X 2 = 8
  # 4 X 3 = 12
  # 4 X 4 = 16
  # 4 X 5 = 20
  # 4 X 6 = 24
  `,
  },
  {
    title: `32. Program to demonstrate even or odd numbers from the list using lambda function`,
    code: `# a list contains both even and odd numbers.
  seq = [0, 1, 2, 3, 5, 8, 13]
  print('The sequence numbers are',seq)
  # result contains odd numbers of the list
  result = filter(lambda x: x % 2, seq)
  print('The odd numbers are',list(result))
  # result contains even numbers of the list
  result = filter(lambda x: x % 2 == 0, seq)
  print('The even numbers are',list(result))
  # OUTPUT
  # The sequence numbers are [0, 1, 2, 3, 5, 8, 13]
  # The odd numbers are [1, 3, 5, 13]
  # The even numbers are [0, 2, 8]
  `,
  },
  {
    title: `33. Program to demonstrate string operations`,
    code: `s = "DCET is the finest choice of Engineering students in TS"
  # Length should be 20
  print("Length of s = %d" % len(s))
  # First occurrence of "a" should be at index 10
  print("The first occurrence of the letter h = %d" % s.index("h"))
  # Number of e's should be 6
  print("e occurs %d times" % s.count("e"))
  # Slicing the string into bits
  print("The first five characters are '%s'" % s[:5]) # Start to 5
  print("The next five characters are '%s'" % s[5:10]) # 5 to 10
  print("The thirteenth character is '%s'" % s[12]) # Just number 12
  print("The characters with odd index are '%s'" %s[1::2]) #(0-based indexing)
  print("The last five characters are '%s'" % s[-5:]) # 5th-from-last to end
  # Convert everything to uppercase
  print("String in uppercase: %s" % s.upper())
  # Convert everything to lowercase
  print("String in lowercase: %s" % s.lower())
  # Check how a string starts
  if s.startswith("Str"):
   print("String starts with 'Str'. Good!")
  # Check how a string ends
  if s.endswith("ome!"):
   print("String ends with 'ome!'. Good!")
  # Split the string into three separate strings,
  # each containing only a word
  print("Split the words of the string: %s" % s.split(" "))
  # OUTPUT
  # Length of s = 55
  # The first occurrence of the letter h = 9
  # e occurs 6 times
  # The first five characters are 'DCET '
  # The next five characters are 'is th'
  # The thirteenth character is 'f'
  # The characters with odd index are 'CTi h ietcoc fEgneigsuet nT'
  # The last five characters are 'in TS'
  # String in uppercase: DCET IS THE FINEST CHOICE OF ENGINEERING
  # STUDENTS IN TS
  # String in lowercase: dcet is the finest choice of engineering students in ts
  # Split the words of the string: ['DCET', 'is', 'the', 'finest', 'choice', 'of', 'Engineering',
  # 'students', 'in', 'TS']
  `,
  },
  {
    title: `34. Program to convert decimal number to octal, binary and hex numbers`,
    code: `dec = int(input("Enter a decimal number: "))
  print(bin(dec),"in binary.")
  print(oct(dec),"in octal.")
  print(hex(dec),"in hexadecimal.")
  # OUTPUT
  # Enter a decimal number: 12
  # 0b1100 in binary.
  # 0o14 in octal.
  # 0xc in hexadecimal.
  `,
  },
  {
    title: `35. Program to iterate over characters of a string`,
    code: `# Python program to iterate over characters of a string
  # Code #1
  string_name = "deccancollege"
  # Iterate over the string
  for element in string_name:
  print(element, end=' ')
  print("\n") 
  # Code #2
  string_name = "college"
  # Iterate over index
  for element in range(0, len(string_name)):
  print(string_name[element])
  # OUTPUT
  # d e c c a n c o l l e g e
  # c
  # o
  # l
  # l
  # e
  # g
  # e
  `,
  },
  {
    title: `36. Program to iterative character in reverse order`,
    code: `string_name = "DECCAN"
  # slicing the string in reverse fashion
  for element in string_name[ : :-1]:
  print(element, end =' ')
  print('\n')
  # Code #2
  string_name = "HYDERABAD"
  # Getting length of string
  ran = len(string_name)
  # using reversed() function
  for element in reversed(range(0, ran)):
  print(string_name[element])
  # OUTPUT
  # N A C C E D
  # D
  # A
  # B
  # A
  # R
  # E
  # D
  # Y
  # H
  `,
  },
  // Add more code snippets here
];
