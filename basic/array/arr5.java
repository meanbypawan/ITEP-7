import java.util.Scanner;
class Test{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter order of Matrix");
        int m = sc.nextInt();
        int n = sc.nextInt();
        int arr[][] = new int[m][n];
        for(int r=0; r<m; r++){
          System.out.println("Enter "+n+" element of "+(r+1)+" row");
          for(int c=0; c<n; c++){
             arr[r][c] = sc.nextInt();
          }
        }

        for(int r=0; r<m; r++){
          for(int c=0; c<n; c++){
             if(r == c)
               System.out.print(arr[r][c]+" ");
          }
          System.out.println();
        }
    }   
}