class Test{
    public static void main(String args[]){
        String s1 = "hello";
        String s2 = "world";
        String s3 = new String("hello").intern();

        System.out.println(s1 == s3); // location/address matching
        System.out.println(s1.equals(s3)); // content matching

    }

}