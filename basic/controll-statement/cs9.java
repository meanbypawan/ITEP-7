// byte , short, int, char, String(1.7)
import java.util.Scanner;
class Test{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter City");
        String city = sc.next().toUpperCase();
        
        switch(city){
          case "INDORE": System.out.println("MP");break;
          case "PUNE": System.out.println("MH");break;
          default: System.out.println("Invalid City");
        }
    }
}