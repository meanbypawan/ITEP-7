class Test{
    public static void main(String args[]){
        int arr[][] = {
            {10,20,30},
            {40,50,60},
            {70,80,80}
        };
    

        for(int r=0; r<arr.length; r++){
          for(int c=0; c<arr[r].length; c++){
            System.out.print(arr[r][c]+" ");
          }
          System.out.println();
        }
    }   
}