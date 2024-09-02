import java.util.Comparator;
public class SortBySalary implements Comparator<Employee>{
    public int compare(Employee o1, Employee o2){
        int x =  o1.getSalary() - o2.getSalary();
        if(x == 0)
          return 1;
        return x;  
    }
}