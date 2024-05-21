/*
  int a,b;

  1 addition
  2 subtraction
  3 multiplication
  4 division
 */
import java.util.Scanner;
class Test{
   public static void main(String args[]){
     Scanner sc = new Scanner(System.in);

     System.out.println("Press 1 for addition");
     System.out.println("Press 2 for subtraction");
     System.out.println("Press 3 for division");
     System.out.println("Pres 4 for multiplication");

     System.out.println("Enter your choice");
     int choice = sc.nextInt();
     int a,b;
     if(choice>=1 && choice <=4){
        System.out.println("Enter 2 number");
        a = sc.nextInt();
        b = sc.nextInt();
        switch(choice){
            case 1: System.out.println("Addition : "+(a+b));
                    break;
            case 2: System.out.println("Subtraction : "+(a-b));
                    break;         
            case 3: System.out.println("Division : "+(a/b));
                    break;        
            case 4: System.out.println("Multiplication : "+(a*b));break;
            default: System.out.println("Switch Default..");  
        }
     }
     else
       System.out.println("Invalid choice...");
   }
}

















