class Task{
   synchronized public void m1(){
        try{
            for(int i=1; i<=5; i++){
                System.out.println(Thread.currentThread().getName()+" executing m1()");
                Thread.sleep(3000);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
    synchronized public void m2(){
        try{
            for(int i=1; i<=5; i++){
                System.out.println(Thread.currentThread().getName()+" executing m2()");
                Thread.sleep(3000);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
    public void m3(){
        try{
            for(int i=1; i<=5; i++){
                System.out.println(Thread.currentThread().getName()+" executing m3()");
                Thread.sleep(5000);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class First extends Thread{
    Task task;
    public First(Task task){
      this.task = task;
    }
    public void run(){
       task.m1();
    }
}
class Second extends Thread{
    Task task;
    public Second(Task task){
      this.task = task;
    }
    public void run(){
       task.m2();
    }
}
class Third extends Thread{
    Task task;
    public Third(Task task){
      this.task = task;
    }
    public void run(){
       task.m3();
    }
}
class TestMain{
    public static void main(String args[]){
      Task task = new Task();
      First t1 = new First(task);        
      Second t2 = new Second(task);
      Third t3 = new Third(task);

      t1.setName("Thread T1");
      t2.setName("Thread T2");
      t3.setName("Thread T3");

      t1.start();
      t2.start();
      t3.start();
    }
}
