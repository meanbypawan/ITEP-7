class Test{
    public static void main(String args[]){
        int arr[][] = {
            {10,20,30},
            {40,50,60},
            {70,80,80}
        };
        
        for(int row[] : arr){
            for(int element : row){
                System.out.print(element+" ");
            }
            System.out.println();
        }
    }   
}