class Distance{
    private int km;
    private int meter;
    public Distance(int km, int meter){
        this.km = km;
        this.meter = meter;
    }
    public Distance(){
        km = meter = 0;
    }
    /*
    public Distance addDistance(Distance k){
        Distance temp = new Distance();
        temp.km = km + k.km;
        temp.meter = meter + k.meter;
        if(temp.meter >=1000){
            temp.km++;
            temp.meter = temp.meter - 1000;
        }
        return temp;
    }
    */
   public void addDistance(Distance k){
        this.km = this.km + k.km;
        this.meter = this.meter + k.meter;
        if(this.meter >=1000){
            km++;
            this.meter = this.meter - 1000;
        }
    }
    public void display(){
        System.out.println(km+" km "+meter+" meter");
    }
}
class TestMain{
    public static void main(String args[]){
     /* 
      Distance d1 = new Distance(2,800); // d1 : {km:2, meter:800}       
      Distance d2 = new Distance(6,700);// d2 :{km:6,meter:700}
      
      d1.display();
      d2.display();

      Distance d3 = d1.addDistance(d2); 
      d3.display();
     */
      Distance d1 = new Distance(2,800); // d1 : {km:2, meter:800}       
      Distance d2 = new Distance(6,700);// d2 :{km:6,meter:700}
      
      d1.display();
      d2.display();

     d1.addDistance(d2);
     d1.display();

     //Distance result = Distance.addDistance(d1,d2); 
    }
}








