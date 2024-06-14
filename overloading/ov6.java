class Test{
    public void add(int... x){
       int sum = 0; 
       for(int element : x)
         sum = sum + element;
       System.out.println("Sum : "+sum);  
    }
}
class TestMain{
    public static void main(String args[]){
       Test obj = new Test();
       obj.add(1,2,3,4,5);
    }
}