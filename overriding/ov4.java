/*
   int x = 20;
   double y = 20.5;
   Student s = new Student();
   StringBuffer sb = new StringBuffer();

   data

 */
class A{
    public void m1(Object x){
        System.out.println("Object - version...");
    }
}
class B extends A{
    public void m1(String x){
        System.out.println("String - version...");
    }
}

class TestMain{
    public static void main(String args[]){
       A obj = new B();
       obj.m1("hello..");
      
    }
}









