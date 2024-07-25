/*
  public class Thread implements Runnable{
    public static final int MAX_PRIORITy = 10;
    public static final int NORM_PRIORITY = 5;
    public static final int MIN_PRIORITY = 1;
  }
  */
class FirstThread extends Thread{
    public void run(){
        System.out.println("T1 Priority : "+Thread.currentThread().getPriority());
        try{
            for(int i=1; i<=5; i++){
                System.out.println(Thread.currentThread().getName());
                Thread.sleep(1000);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class SecondThread extends Thread{
    public void run(){
        System.out.println("T2 Priority : "+Thread.currentThread().getPriority());
        try{
            for(int i=1; i<=5; i++){
                System.out.println(Thread.currentThread().getName());
                Thread.sleep(1300);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class TestMain{
    public static void main(String arg[]){
        
        Thread.currentThread().setPriority(10);
        
        FirstThread t1 = new FirstThread();
        SecondThread t2 = new SecondThread();
        
        t1.setName("T1");
        t2.setName("T2");
        
        //t1.setPriority(Thread.MIN_PRIORITY);
        //t2.setPriority(10);

        t1.start();
        t2.start();
    }
}











