package p1;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;


public class TestSelect {
  public static void main(String args[]) {
	  try (Connection con = GetConnection.getConnection();){
		  String sql = "select * from user";
		  PreparedStatement ps = con.prepareStatement(sql);
		  ResultSet rs =  ps.executeQuery();
		  while(rs.next()) {
			  int id = rs.getInt(1);
			  String name = rs.getString(2);
			  String contact = rs.getString(3);
			  int age = rs.getInt(4);
			  String gender = rs.getString(5);
			  System.out.println(id+" "+name+" "+contact+" "+age+" "+gender);
		  }
	  }
	  catch(Exception e) {
		  e.printStackTrace();
	  }
  }
}
