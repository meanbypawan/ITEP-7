class Test{
    public void add(int a, int b){
        System.out.println(a+b);
    }
    public int add(int a, int b, int c){
        System.out.println(a+b+c);
        return a+b+c;
    }
    public void add(int a, int b, int c,int d){
        System.out.println(a+b+c+d);
    }
}
class TestMain{
    public static void main(String args[]){
        Test obj = new Test();
        obj.add(1,2);
        int result = obj.add(1,2,3);
        //System.out.println(result);
        obj.add(1,2,3,4);
    }
}