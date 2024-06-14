class Test{
    public void m1(byte a){
        System.out.println("Byte version..");
    }
    public void m1(short b){
        System.out.println("Short version..");
    }
    public void m1(int c){
        System.out.println("Integer version..");
    }
    public void m1(long d){
        System.out.println("Long version...");
    }
}
class TestMain{
    public static void main(String args[]){
        Test obj = new Test();
        //byte a = 20;
        obj.m1((byte)20);
    }
}