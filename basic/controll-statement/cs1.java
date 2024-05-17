import java.util.Scanner;
class Test{
    public static void main(String sheela[]){
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter an integer number");
      int n = sc.nextInt();
      if(n%2==0)
        System.out.println(n+" is even");
      else
        System.out.println(n+" is odd");  
    }
}