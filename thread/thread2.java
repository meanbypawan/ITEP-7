class FirstThread extends Thread{
    public void run(){
      try{  
        for(int i=1; i<=5; i++){
            System.out.println("Cheeku..");
            Thread.sleep(3000);
        }
      }
      catch(InterruptedException e){
        e.printStackTrace();
      }  
    }       
}
class SecondThread extends Thread{
    public void run(){
      try{  
        for(int i=1; i<=5; i++){
            System.out.println("Peeku..");
            Thread.sleep(2100);
        }
      }
      catch(InterruptedException e){
        e.printStackTrace();
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









