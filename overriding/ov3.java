class A{
    public A m1(){
        System.out.println("A-m1()");
        return new A();
    }
}

class B extends A{
    public B m1(){
        System.out.println("B-m1()");
        return new B(); 
    }
}
class TestMain{
    public static void main(String args[]){
        A obj = new B();
        System.out.println(obj.m1());
    }
}





