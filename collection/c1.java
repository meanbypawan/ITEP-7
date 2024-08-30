import java.util.ArrayList;
/*
  public void add(int index, int element){
    if(index > this.size())
      throw new IndexOutOfBoundsException();
    else{
        // addEelemnt here
    }  
  }
 */
class TestMain{
    public static void main(String args[]){
      ArrayList<Integer>al = new ArrayList<Integer>(10);
      al.add(100);
      al.add(120);
      al.add(30);
      al.add(60);
      al.add(75);
      al.add(9,5000);
      System.out.println("Total Element : "+al.size());
      System.out.println(al); 
    }
}

