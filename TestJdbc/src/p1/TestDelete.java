package p1;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Scanner;

public class TestDelete {
  public static void main(String args[]) {
	  try (Connection con = GetConnection.getConnection();){
		  String sql = "delete from user where id = ?";
		  Scanner sc = new Scanner(System.in);
		  System.out.println("Enter record id ");
		  int id =sc.nextInt();
		  PreparedStatement ps = con.prepareStatement(sql);
		  ps.setInt(1, id);
		  int x = ps.executeUpdate();
		  if(x!=0)
			  System.out.println("Record Deleted...");
		  else
			  System.out.println("Not deleted....");
		  
	  }
	  catch(Exception e) {
		  e.printStackTrace();
	  }
  }
}
