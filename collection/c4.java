import java.util.LinkedHashSet;
class TestMain{
    public static void main(String args[]){
        LinkedHashSet<Integer> lhs = new LinkedHashSet();
        lhs.add(10);
        lhs.add(30);
        lhs.add(20);
        lhs.add(45);
        lhs.add(40);
        lhs.add(10);
        lhs.add(10);
        lhs.add(10);
        for(Integer element : lhs)
          System.out.println(element);
    }
}