import java.util.Scanner;
class Test{
    public static void main(String ags[]){
       Scanner sc = new Scanner(System.in);
       System.out.println("Enter 1st value");
       int a = sc.nextInt();

       System.out.println("Enter 2nd value");
       int b = sc.nextInt();

       System.out.println("Enter 3rd value");
       int c = sc.nextInt();
    
       if(a>b && a>c)
         System.out.println("Greater value : "+a);
       else if(b > c)
          System.out.println("Greater value : "+b);
        else
          System.out.println("Greater value : "+c); 
         
    }
}





