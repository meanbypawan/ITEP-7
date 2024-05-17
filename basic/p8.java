import java.util.Scanner;
class Test{
   public static void main(String args[]){
     //java.util.Scanner sc = new java.util.Scanner(System.in);
     System.out.println("Enter first number");
     int a = new Scanner(System.in).nextInt();
     
     System.out.println("Enter second number");
     int b = new Scanner(System.in).nextInt();
     
     System.out.println("Addition : "+(a+b));
   }
}
