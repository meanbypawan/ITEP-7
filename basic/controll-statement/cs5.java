/*
   switch(expression){
     case label1: statement ---1;
                  statement ---2;
                  break;
     case label2: statement ---3;
                  break;
     .
     .

   }
 */
import java.util.Scanner;
class Test{
    public static void main(String args[]){
      Scanner sc = new Scanner(System.in);
      
      System.out.println("Enter integer number b/w 1 to 5");
      int n = sc.nextInt();
      //int a = 2, b=1;
      switch(n){
        case 1: System.out.println("one"); break;
        case 2 : System.out.println("two");break;
        case 3: System.out.println("three");break;
        case 4: System.out.println("four");break;
        case 5: System.out.println("five");break;
        default: System.out.println("Invalid number...");
      } 
      System.out.println("Out Of Switch/ Switch Terminated.."); 
    }
}











