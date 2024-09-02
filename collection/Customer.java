public class Customer{
    private int id;
    private String name;
    private int age;
    public Customer(int id, String name, int age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    public Customer(){}
    public int getId(){
        return id;
    }
    public int hashCode(){
        return id;
    }
    public boolean equals(Object o){
       Customer c = (Customer)o;
       return this.id == c.id && this.name.equals(c.name);

    }
    public String getName(){
        return name;
    }
    public int getAge(){
        return age;
    }
    public void setId(int id){
        this.id = id;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setAge(int age){
        this.age = age;
    }
    public String toString(){
       return id+"  "+name+"  "+age;
    }
}










