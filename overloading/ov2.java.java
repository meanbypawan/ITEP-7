class Test{
    public void m1(float a, float b){
        System.out.println("2-float version");
    }
    public void m1(int a, int b){
        System.out.println("2-integer version");
    }
}

class TestMain{
    public static void main(String args[]){
        Test obj = new Test();
        obj.m1(20,10);
    }
}