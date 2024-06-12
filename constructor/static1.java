class A{
    static{
      A.m1();  
      System.out.println("Block-A");
      new C();
    }
    public static void m1(){
        System.out.println("A-m1()");
    }
}
class B{
    static{
      System.out.println("Block-B");
    }
}

class C{
    static{
      System.out.println("Block-C");
    }
}
class TestMain{
    static{
        System.out.println("Main-Block");
    }
    public static void main(String args[]){
        A.m1();
        new B();
    }
}









