class Test{
    public static  String[] split(String s, char ch){
       int count = 0;
       for(int i=0; i<s.length(); i++){
        if(s.charAt(i) == ch){
            count++;
        }
       }
       String result[] = new String[count+1];
       int k=0;
       String part = "";
       // www.google.com , ch='.'
       for(int i=0; i<s.length(); i++){
          char letter = s.charAt(i);
          if(letter != ch)
             part = part+letter; // "www"
          else{
            result[k++] = part; //["www","google","com"]
            part = "";
          }
        
       }
       result[k++] = part;
       return result;
    }
}
class TestMain{
    public static void main(String args[]){
       String s[] =  Test.split("www#google#com",'#');
       for(String element : s)
         System.out.println(element);
    }
}