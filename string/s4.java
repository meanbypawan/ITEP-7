class Message{
    private String msg;
    public Message(String msg){
        this.msg = msg;
    }
    public String toString(){
        //return this.getClass().getName()+"@"+this.hashCode();
        return msg;
    }
}
class TestMain{
    public static void main(String args[]){
        String s = new String("Hello");
        System.out.println(s);// s.toString()

        Message message = new Message("Good Morning");
        System.out.println(message); // message.toString()
    }
}