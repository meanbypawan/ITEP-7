class Test{
    public static void main(String args[]){
        int a[] = {1, 55, 10, 20, 40, 80};
        int b[] = {6, 7,55, 20, 80, 100};
        int c[] = {3, 4, 15,55, 20, 30, 70, 80, 120};
        int common[] = new int[c.length];
        int p=0,i;
        boolean flag = true;
        for(i=0; i<c.length; i++){
           for(int j=0; j<b.length; j++){
              if(c[i] == b[j]){
                for(int k=0; k<a.length; k++){
                    if(c[i] == a[k]){
                        flag = true;
                        for(int l=0; l<p;l++){
                            if(common[p] == c[i]){
                                flag = false;
                                break;
                            }
                        }
                        if(flag)
                         common[p++] = c[i];
                        break;
                    }
                }
              }
           }
        }

        for(i=0; i<p; i++)
          System.out.print(common[i]+" ");
        System.out.println();  
    }
}
