abstract class A{
    abstract public void m1();
    public void wish(){
        System.out.println("GM");
    }
    public static void greet(){
        System.out.println("Hello Friends...");
    }
}
class B extends A{
   public void m1(){
    System.out.println("m1()-executed...");
   }
}   
class TestMain{
    public static void main(String ags[]){
        //A.greet();
        A obj = new B();
        obj.m1();
        obj.wish();
        B.greet();
    }
}