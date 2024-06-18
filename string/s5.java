import java.util.Scanner;
class MyString{
    private String s;
    public MyString(String s){
        this.s = s;
    }
    public String toUpperCase(){
        String result = "";
        for(int i=0; i<s.length(); i++){
            char ch = s.charAt(i);
            if(ch>='a' && ch<='z'){
                ch = (char)(ch - 32);
                result = result + ch;
            }
            else
              result = result + ch;
        }
        return result;
    }
}
class TestMain{
    public static void main(String args[]){
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter a String");
      String s = sc.nextLine();  
      MyString s1 = new MyString(s); // s1:{s: "hello"}

      String result = s1.toUpperCase();
      System.out.println(result);
    }
}