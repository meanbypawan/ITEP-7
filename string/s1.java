class Test{
    public static void main(String args[]){
        String s1 = "A"; // SCP
        String s2 = "B"; // SCP 
        String s3 = "AB"; // SCP
        String s4 = new String("A"); // HEAP
        String s5 = s1 + s2; // AB : HEAP
        String s6 = new String("B"); // HEAP
        String s7 = s4 + s6; // AB : HEAP
        String s8 = "A"+"B";
        String s9 = s8 + "CD";
        String s10 = "ABCD";
        System.out.println(s5 == s7);
    }
}