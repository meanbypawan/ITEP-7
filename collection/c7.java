import java.util.TreeSet;
class TestMain{
    public static void main(String args[]){
        TreeSet<Employee> ts = new TreeSet<Employee>();
        //TreeSet<Employee> ts = new TreeSet<Employee>(new SortByName());
        //TreeSet<Employee> ts = new TreeSet<Employee>(new SortBySalary());
        ts.add(new Employee(100,"A",54000));
        ts.add(new Employee(101,"C",76000));
        ts.add(new Employee(104,"E",92000));
        ts.add(new Employee(102,"D",89000));
        ts.add(new Employee(103,"B",130000));
        ts.add(new Employee(105,"F",92000));

        for(Employee e : ts)
          System.out.println(e);
    }
}