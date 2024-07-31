class Task{
    synchronized public void m1(){
       try{
        System.out.println(Thread.currentThread().getName()+" got a lock| executing");
        for(int i=0; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" producing data..");
            Thread.sleep(3000);
        }
        System.out.println("Data produced...");
        notifyAll();
       }
       catch(Exception e){
        e.printStackTrace();
       }  
    }
    synchronized public void m2(){
       try{
        System.out.println(Thread.currentThread().getName()+" got a lock | executing");
        System.out.println(Thread.currentThread().getName()+" relased lock | waiting");
        wait();
        for(int i=0; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" consuming data..");
            Thread.sleep(3000);
        }
       }
       catch(Exception e){
        e.printStackTrace();
       }  
    }
}
class Producer extends Thread{
   Task task;
   public Producer(Task task){
    this.task = task;
   }
   public void run(){
      task.m1();
   }
}
class Consumer extends Thread{
   Task task;
   public Consumer(Task task){
    this.task = task;
   }
   public void run(){
    task.m2();
   }
}
class TestMain{
    public static void main(String args[]) throws Exception{
        Task task = new Task();
        Producer p = new Producer(task);
        Consumer c1 = new Consumer(task);
        Consumer c2 = new Consumer(task);
        Consumer c3 = new Consumer(task);

        p.setName("Producer ");
        c1.setName("Consumer 1 ");
        c2.setName("Consumer 2 ");
        c3.setName("Consumer 3 ");

        c1.start();
        c1.join(2000);
        
        c2.start();
        c2.join(2000);
        
        c3.start();
        c3.join(2000);
        
        p.start();

    }
}















