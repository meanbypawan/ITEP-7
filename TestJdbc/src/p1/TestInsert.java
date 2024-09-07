package p1;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Scanner;

public class TestInsert {
   public static void main(String args[]) {
	  Connection con = null; 
	  try { 
	   Scanner sc = new Scanner(System.in);
	   
	   System.out.println("Enter name");
	   String name = sc.next();
	   
	   System.out.println("Enter contact");
	   String contact = sc.next();
   
       System.out.println("Enter gender");
       String gender = sc.next();
       
       System.out.println("Enter Age");
       int age = sc.nextInt();
       
       String sql = "insert into user(name,contact,gender,age) values(?,?,?,?)"; 
	   con = GetConnection.getConnection();
	   PreparedStatement ps = con.prepareStatement(sql);
	   ps.setString(1, name);
	   ps.setString(2, contact);
	   ps.setString(3, gender);
	   ps.setInt(4, age);
	   int x = ps.executeUpdate();
	   if(x!=0)
		   System.out.println("Record inserted...");
	  }
	  catch(Exception e) {
		  e.printStackTrace();
	  }
	  finally {
		  try {
			  con.close();
		  }
		  catch(Exception e) {
			  e.printStackTrace();
		  }
	  }
   }
}
