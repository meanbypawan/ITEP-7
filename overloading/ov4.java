class Test{
    public void m1(int a, long b){
        System.out.println("Integer-long version called...");
    }
    public void m1(long a, int b){
        System.out.println("Long-Integer version called....");
    }
    // public void m1(int a, int b){
    //     System.out.println("Integer-Integer version called...");
    // }
}
class TestMain{
    public static void main(String args[]){
        new Test().m1(20,10L);
    }
}