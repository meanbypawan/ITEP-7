class TestMain{
    public static void main(String args[]){
        try{
          Runnable r1 = ()->{
            for(int i=1; i<=5; i++){
              try{  
                System.out.println("Hello...");
                Thread.sleep(3000);
              }
              catch(Exception e){
                e.printStackTrace();
              }  
            }
          };
          Runnable r2 = ()->{
            for(int i=1; i<=5; i++){
               try{  
                System.out.println("World...");
                Thread.sleep(1200);
               }
               catch(Exception e){
                e.printStackTrace();
               } 
            }
          };
          new Thread(r1).start();
          new Thread(r2).start();
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}