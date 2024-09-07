import java.util.LinkedHashMap;
import java.util.Map.Entry;
import java.util.Map;
import java.util.Set;
class TestMain{
    public static void main(String args[]){
       LinkedHashMap<Integer,String> lhm = new LinkedHashMap<Integer,String>();
       lhm.put(1001,"A");
       lhm.put(1002,"B");
       lhm.put(1003,"C");
       lhm.put(1001,"D");
       lhm.put(null,"E");
       lhm.put(1004,"A");
       lhm.put(1005,"A");
       Set<Map.Entry<Integer,String>> set =  lhm.entrySet();
       for(Map.Entry<Integer,String> entry : set)
         System.out.println(entry.getKey()+"  "+entry.getValue());
    }
}