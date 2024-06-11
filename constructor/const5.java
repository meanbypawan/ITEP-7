// POJO (Plain Old Java Object)
public class Addition{
    private int a;
    private int b;
    public Addition(int a, int b){
        this.a = a;
        this.b = b;
    }
    public Addition(){}
    public void setA(int a){
        this.a = a;
    }
    public void setB(int b){
        this.b = b;
    }
    public int getA(){
        return a;
    }
    public int getB(){
        return b;
    }
    public int add(){
        return a+b;
    }
}
class TestMain{
    public static void main(String args[]){
        java.util.Scanner sc = new java.util.Scanner(System.in);
        System.out.println("Enter 2 number");
        int a = sc.nextInt();
        int b = sc.nextInt();
        Addition obj = new Addition(a,b); //obj: a=20, b=10
        int result = obj.add();
        System.out.println("Addition : "+result);
    }
}