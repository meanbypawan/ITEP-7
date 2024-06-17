/*
   public int length() // s.length();
   public String toUpperCase();
   public String toLowerCase();
   public char charAt(int index); // "hello".charAt(1);
   public int indexOf(char/String ele);// "hello".indexOf("l")  
   public int lastIndexOf(char/String ele);
   public boolean contains("el"); "hello".contains("el");
   public String trim();
   public String substring(int begIndex); 
   public String substring(int begIndex, int endIndex);
   public String[] split(String regEx);
   public int compare(String s); // 0, +ve, -ve
   public int compareToIgnoreCase(String);
 */
class Test{
    public static int getLength(String s){
        // int count = 0;
        // char ch[] = s.toCharArray();
        // return ch.length;
        int count = 0;
        for(int i = 0; i<s.length(); i++){
            char ch = s.charAt(i);
            System.out.println(ch);
        }
        return 0;
    }
    public static void main(String args[]){
       String s1 = "hello";
       Test.getLength("welcome");
    }
}





