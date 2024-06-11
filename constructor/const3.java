class Test{
    public Test(int x, int y){
      this(200);
    }
    public Test(int x){
      this(20,10);
    }
}
class TestMain{
    public static void main(String args[]){
        new Test(20,10);
    }
}