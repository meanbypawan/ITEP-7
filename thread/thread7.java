class First extends Thread{
    public void run(){
        try{
            for(int i=1; i<=5; i++){
                System.out.println("First Thread..");
                Thread.sleep(5000);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class TestMain{
    public static void main(String args[]) throws Exception{
       First t1 = new First();
       System.out.println("After Create : "+t1.getState());
       t1.start();
       System.out.println("After Start : "+t1.getState()); 
       t1.join();
       System.out.println("After Execution : "+t1.getState());      
    }
}