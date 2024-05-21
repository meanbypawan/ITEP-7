import java.util.Scanner;
class Test{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a letter");
        char ch = sc.next().charAt(0);

        switch(ch){
          case 'a': 
          case 'A':
          
          case 'E':
          case 'e':
          
          case 'I':
          case 'i':
          
          case 'O':
          case 'o':
          
          case 'U':
          case 'u': System.out.println("Vowel");break;
          
          default: System.out.println("Not vowel...");
                   System.out.println("Now vowel...2");
        }
    }
}







