// n : 1 to 5
/*
  1 : one
  2 : two
  3 : three
  4 : four
  5 : five
 */
import java.util.Scanner;
class Test{
    public static void main(String args[]){
       Scanner sc  = new Scanner(System.in);
       System.out.println("Enter a number..");
       int n = sc.nextInt();
       // n = 3
       if(n == 1)
         System.out.println("one");
       if(n == 2)
         System.out.println("two");
       if(n == 3)
         System.out.println("three");
       if(n == 4)
         System.out.println("four");
       if(n == 5)
         System.out.println("five");        
    }
}








