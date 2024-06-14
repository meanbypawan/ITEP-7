class Test{
    public void m1(int a, int b){
        System.out.println("2-integer version");
    }
    public void m1(int a, int b, int c){
        System.out.println("3-integer version");
    }
}

class TestMain{
    public static void main(String args[]){
        Test obj = new Test();
        obj.m1(20,10);
        obj.m1(20,10,5);
    }
}