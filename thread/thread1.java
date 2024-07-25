class FirstThread extends Thread{
    public void run(){
        for(int i=1; i<=5; i++){
            System.out.println("Cheeku..");
        }
    }
}
class SecondThread extends Thread{
    public void run(){
        for(int i=1; i<=5; i++){
            System.out.println("Peeku..");
        }
    }
}
class TestMain{
    public static void main(String args[]){
       FirstThread t1 = new FirstThread();
       SecondThread t2 = new SecondThread();

       t1.start(); // run()
       t2.start(); // run()
    }
}









