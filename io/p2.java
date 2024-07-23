import java.io.File;
import java.io.FileInputStream;
import java.io.ObjectInputStream;
class TestMain{
    public static void main(String args[]){
        try{
          File f = new File("customer.txt");
          FileInputStream fin = new FileInputStream(f);
          ObjectInputStream ois = new ObjectInputStream(fin);
          Customer c = (Customer)ois.readObject();
          System.out.println(c);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
// public Object readObject();