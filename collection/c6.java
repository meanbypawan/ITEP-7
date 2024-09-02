import java.util.LinkedHashSet;
class TestMain{
  public static void main(String args[]){
    LinkedHashSet<Customer> lhs = new LinkedHashSet<Customer>();
    lhs.add(new Customer(100,"A",23));
    lhs.add(new Customer(102,"B",25));
    lhs.add(new Customer(101,"E",21));
    lhs.add(new Customer(104,"D",22));
    lhs.add(new Customer(103,"C",24));
    lhs.add(new Customer(100,"G",32));
    //lhs.add(new Customer(100,"A",23));

    for(Customer c : lhs)
     System.out.println(c);
  }
}