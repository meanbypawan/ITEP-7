// Construcotr chaining
class Test{
   public Test(int x, int y){
      this(x);
      this();
      System.out.println("2-parameter");
   }
   public Test(int x){
       System.out.println("1-parameter");
   }
   public Test(){
      System.out.println("Default..");
   }
}
class TestMain{
    public static void main(String args[]){
      Test obj = new Test(20,10); // 
    }
}