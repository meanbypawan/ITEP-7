class A{
    {
        System.out.println("Initializer Block executed....");
    }
    static{
        System.out.println("Static Block Executed...");
    }
    // initializer block
    
    public A(){
        System.out.println("Constructor Executed...");
    }
    public static void main(String args[]){
        new A();
    }
}