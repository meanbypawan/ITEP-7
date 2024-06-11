class Test{
  public Test(int x, int y){
    System.out.println("Parameterized constructor called...");
  }
  public Test(String message){
    System.out.println("String parameter called..");
  }
  public Test(){
    System.out.println("Default constructor called...");
  }
}

class TestMain{
    public static void main(String args[]){
       Test obj = new Test(20,10);
       Test obj2 = new Test("Hello");
       Test obj3 = new Test();
    }
}