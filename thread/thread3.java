/*
  class Thread implements Runnable{
    public void run(){}
    public void start(){
        this.run();
    }
  }
 */
class FirstThread extends Thread{
    public void run(){
       try{ 
        for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" printing Cheeku");
            Thread.sleep(2000);
        }
       }
       catch(Exception e){
        e.printStackTrace();
       } 
    }
}

class TestMain{
    public static void main(String args[]) throws InterruptedException{
       FirstThread t1 = new FirstThread();
       FirstThread t2 = new FirstThread();
       
       t1.setName("Thread-T1");
       t2.setName("Thread-T2");

       t1.start(); // run()
       t2.start(); // run()
       Thread.currentThread().setName("Prakhar..");
       for(int i=1; i<=5; i++){
         System.out.println(Thread.currentThread().getName());
         Thread.sleep(3000);
       }
    }
}









