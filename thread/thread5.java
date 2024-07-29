class First extends Thread{
    public void run(){
        try{
           for(int i=1; i<5; i++){
             System.out.println("First Thread...");
             Thread.sleep(3000);
           }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class Second extends Thread{
    public void run(){
        try{
           for(int i=1; i<5; i++){
             System.out.println("Second Thread...");
             Thread.sleep(2000);
           }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class Third extends Thread{
    public void run(){
        try{
           for(int i=1; i<5; i++){
             System.out.println("Third Thread...");
             Thread.sleep(1300);
           }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class TestMain{
    public static void main(String args[]){
      try{ 
       First t1 = new First();
       Second t2 = new Second();
       Third t3 = new Third();
       t1.start();
       System.out.println("Main Stoppred | T1 got chance for execution..");
       t1.join();
       System.out.println("Main resume...");
       t2.start();
       t2.join();
       t3.start();
       for(int i=1; i<=5; i++){
        System.out.println("Main Thread...");
        Thread.sleep(700);
       }
      }
      catch(Exception e){
        e.printStackTrace();
      } 
    }
}






