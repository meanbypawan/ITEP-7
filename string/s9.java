import java.util.StringJoiner;
class TestMain{
    public static void main(String args[]){
     String s = "www.google.com";
     String element[] = s.split("\\."); // RegEX

     StringJoiner sj = new StringJoiner(",","[","]");
    
     for(String str : element)
       sj.add(str);  
    
     System.out.println(sj.toString());

    }  

 
    
}