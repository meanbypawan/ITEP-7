class Test{
   public static void main(String args[]){
    int arr[] = {0,1,0,2,0,1,1,2,2,0,0};
    int i,zerocount=0,onecount=0,twocount=0;
    for(i = 0; i<arr.length; i++){
      if(arr[i]==0)
        zerocount++;
      else if(arr[i]==1)
            onecount++;
           else if(arr[i]==2)
                 twocount++;

    }
    for(i=0;i<arr.length;i++){
        if(zerocount!=0){
            arr[i] = 0;
            zerocount--;
        }
        else if(onecount!=0){
            arr[i] = 1;
            onecount--;
        }
        else if(twocount!=0){
            arr[i] = 2;
            twocount--;
        }
              
    }
    for(i=0; i<arr.length; i++){
        System.out.print(arr[i]);
    }
    System.out.println();
   }   
}