import java.util.ArrayList;
class TestMain{
    public static void main(String args[]){
        ArrayList<Integer>al = new ArrayList<Integer>();
        al.add(5);
        al.add(6);
        al.add(4);
        al.add(8);
        al.add(9);
        al.add(3);
        al.add(1);
        al.add(3);
        System.out.println("Before Remove : "+al);
        //al.remove(3);
        al.remove(new Integer(3));
        System.out.println("After Remove : "+al);
    }
}