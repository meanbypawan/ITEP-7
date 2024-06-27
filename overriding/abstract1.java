abstract class Area{
   protected int l;
   protected int w;
   public Area(int l, int w){
    this.l = l;
    this.w = w;
   }
   abstract int getArea();
}
class AreaImpl extends Area{
  public AreaImpl(int l, int w){
    super(l,w);
  }    
  public int getArea(){
    return l*w;
  }
}
class TestMain{
    public static void main(String ars[]){
        Area obj = new AreaImpl(2,3);
        System.out.println(obj.getArea()); 
    }
}