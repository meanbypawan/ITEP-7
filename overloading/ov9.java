class TestMain{
    public static void m1(String... x){
        System.out.println("String version version");
    }
    public static void m1(String x[]){
        System.out.println("STring[] version");
    }
    public static void main(String args[]){
       System.out.println("Main String[] version");
       TestMain.m1("A","B");
    }
}