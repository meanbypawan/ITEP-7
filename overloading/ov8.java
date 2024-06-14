class Test{
    public static void m1(){
        System.out.println("Default m1()");
    }
    public static void m1(int x){
        System.out.println("Integer version....");
    }
    public static void m1(int x, int y){
        System.out.println("Integer-Integer version....");
    }
}
class TestMain{
    public static void main(String args[]){
        Test.m1();
        Test.m1(20);
        Test.m1(20,10);
    }
}