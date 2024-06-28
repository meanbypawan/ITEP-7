1) What is Inheritance ? Is Java Support the multiple inheritance ? If no then why.
2)What is method overriding ? List down the difference between method overloading and method overriding.
3) What is the role of return type in case of method overloading and method overriding?
4) Can we Override static, private method?
5) Create class OneBHK with instance variable roomArea , hallArea and price.
Create default and parameterized constructor.
Method show(): to print OneBHK data member information.
6) Create another class TwoBHK which has all the properties and behaviour of OneBHK and a new instance variable room2Area.
Create default and parameterized constructor.
Method show(): to print all data member information.
Write main function in another class(Say XYZ) and store three TwoBHK flat’s.information and print information using show method. Also print total amount of all flats.

7) Create three classes  Faculty  (facultyid, salary), FullTimeFaculty  (basic, allowance) inherits class Faculty, PartTimeFaculty  (hour, rate) inherits class Faculty. 
 Create   a   method   for   accepting   input   in   FullTimeFaculty       and  PartTimeFaculty,  but   salary  should   not   be   accepted.    salary   is  calculated   on   the   basis   of   (basic+allowance)   for   FullTimeFaculty   and  (hour*rate)   for   PartTimeFaculty.   Also   create   method   in   above   classes   to  display faculty data. 
 Create   another   class(say   XYZ)   for   main   method   and   store   2 fulltime and 2 parttime faculty information. Also print their details. 

8) Create a class Student with two members : rollno and percentage.
	Create default and parameterized constructors. Create method show() to 	display information.
	Create another class CollegeStudent inherits Student class. Add a new membersemester to it. Create default and parameterized constructors. Also override show() method.
	Create another class SchoolStudent inherits Student class. Add a new memberclassname(eg 12 th ,10 th etc.) to it. Create default and parameterized 	constructors. Also override show() method.
	Create a class(say XYZ) with main method that carries out the operation of the project :
has array to store objects of any class(Student or CollegeStudent, SchoolStudent).
create two CollegeStudent and three SchoolStudent record objects and store 	them inside the array.
display all record from the array.
search record on the basic of rollno and check given rollno is of SchoolStudent or of CollegeStudent.
count how many students are having A grade,if for A grade percentage >75.
9) What is abstract class?. What is interface? Differentiate abstract class and 	interface.
10) Write down difference b/w abstract class and jdk1.8 interface.
11) Create an Abstract class Processor with int member variable data and method showData to display data value.
Create abstract method process() to define processing of member data.
Create a class Factorial using abstract class 	Processor to calculate  and print 	factorial of a number by overriding the process method.
Create a class Circle using abstract class Processor to calculate and print area of a circle by overriding the process method Ask user to enter choice (factorial 	or circle area). Also ask data to work upon; Use Processor class reference to achieve this mechanism.

12) Create Interface Taxable with members salesTax=7% and incomeTax=10.5%. 	Create abstract method calcTax().
Create class Employee(empId,name,salary) and implement Taxable to calculate incomeTax on yearly salary.
Create class Product(pid,price,quantity) and implement Taxable to calculate salesTax on unit price of product.
Create class for main method(Say XYZ), accept employee information and a product information from user and print income tax and sales tax respectively.
13) Explain the importance of toString() and equals() method of the Object class and override them on class Employee (empId,name,salary).
Create class for main method(say XYZ),and accept five employees information and store in an array. Also ensure if entered empId already exist or not (use equals method).
Display all employee info using toString() method.
14) What is the difference b/w jdk1.7 and jdk1.8 interface. Explain jdk1.8 new changes for interface with example.

15) Explain functional interface, predicate, lambda expression, method reference and constructor reference with example.

16)  Create a program that helps banks to maintain records. It should havefollowing facilities.
Anybody can create current or saving account with following initial information:account number, name, balance, and branch.
display account detail for a particular accounts.
display total money deposited in bank.
allow deposit and withdrawal in an account .
for saving account opening balance and minimum balance must be 5000.
for current account opening balance and minimum balance must be 1000.
can not withdraw the amount from the account that makes balance less than the minimum balance.
