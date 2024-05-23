import java.util.Scanner;
class Test{
    public static void main(String rgs[]){
     Scanner sc = new Scanner(System.in);
     System.out.println("Enter n");
     int n = sc.nextInt();
     int i=1,sum = 0;
     while(n!=0){
        System.out.println(i);
        sum = sum + i;
        i++;
        n--;
     }
     System.out.println("Sum  :"+sum);
    }
}