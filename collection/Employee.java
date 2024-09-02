public class Employee implements Comparable<Employee>{
    private int id;
    private String name;
    private int salary;
    public Employee(int id, String name, int salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    public Employee(){}
    public int compareTo(Employee e){
        return this.id - e.id;  
    }
    public String toString(){
        return id+"  "+name+"  "+salary;
    }
    public String getName(){
        return name;
    }
    public int getId(){
        return id;
    }
    public int getSalary(){
        return salary;
    }
}