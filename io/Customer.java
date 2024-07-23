import java.io.Serializable;
public class Customer implements Serializable{
   private int id;
   private String name;
   private String contact;
   private int age;
   transient private String girlFriendName;
   private static String bankName = "ICICI";
   public Customer(){}
   public Customer(int id, String name, String contact, int age, String girlFriendName){
    this.id = id;
    this.name = name;
    this.contact = contact;
    this.age = age;
    this.girlFriendName = girlFriendName;
   }
   public String toString(){
    return id+" "+name+" "+contact+" "+age+" "+girlFriendName;
   }
}
