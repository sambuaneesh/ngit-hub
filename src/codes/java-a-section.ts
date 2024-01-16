export default [
  {
    title: `15.(a) Write a Java applet program for handling mouse & key events `,
    code: `

// Mouse Events
import java.awt.*;
import java.awt.event.*;

public class MouseListenerExample extends Frame implements
        MouseListener {
    Label l;

    MouseListenerExample() {
        addMouseListener(this);
        l = new Label();
        l.setBounds(20, 50, 100, 20);
        add(l);
        setSize(300, 300);
        setLayout(null);
        setVisible(true);
    }

    public void mouseClicked(MouseEvent e) {
        l.setText("Mouse Clicked");
    }

    public void mouseEntered(MouseEvent e) {
        l.setText("Mouse Entered");
    }

    public void mouseExited(MouseEvent e) {
        l.setText("Mouse Exited");
    }

    public void mousePressed(MouseEvent e) {
        l.setText("Mouse Pressed");
    }

    public void mouseReleased(MouseEvent e) {
        l.setText("Mouse Released");
    }

    public static void main(String[] args) {
        new MouseListenerExample();
    }
}

// Key events
import java.awt.*;
import java.applet.*;

/*
 <applet code="Key" width=300 height=100
 </applet>
 */

 public class Key extends Applet implements KeyListener{
    String msg = "";
    int x=10, y=20;
    public void init(){
        addKeyListener(this);
    }
    public void keyPressed(KeyEvent ke){
        showStatus("Key Down");
    }
    public void keyReleased(KeyEvent ke){
        showStatus("Key Up");
    }
    public void keyTyped(KeyEvent ke){
        msg+=ke.getKeyChar();
        repaint();
    }
    public void paint(Graphics g){
        g.drawString(msg,x,y);
    }
 }
      `,
  },
  {
    title: `Program for TreeMap`,
    code: `
import java.util.TreeMap; 
import java.util.Set; 
import java.util.Iterator; 
import java.util.Map; 

public class Details {
    public static void main(String args[]) {
        /* This is how to declare TreeMap */
        TreeMap<Integer, String> tmap = new TreeMap<Integer, String>();
        tmap.put(1, "Data1");
        tmap.put(23, "Data2");
        tmap.put(70, "Data3");
        tmap.put(4, "Data4");
        tmap.put(2, "Data5");
        Set set = tmap.entrySet();
        /* Display content using Iterator*/ 
        Iterator iterator = set.iterator(); 
        while(iterator.hasNext()) {
            Map.Entry mentry = (Map.Entry)iterator.next(); 
            System.out.print("key is: "+ mentry.getKey() + " & Value is: "); 
            System.out.println(mentry.getValue());
        }
    }
}

      `,
  },
  {
    title: `1.(d) Write a java program to add, retrieve & remove element from ArrayList`,
    code: `
import java.util.*;

class Test34 {
    public static void main(String args[]) {
        ArrayList<String> alist = new ArrayList<String>();
        alist.add("Steve");
        alist.add("Tim");
        alist.add("Lucy");
        alist.add("Pat");
        alist.add("Angela");
        alist.add("Tom");
        // displaying elements
        System.out.println(alist);
        alist.remove(3);
        System.out.println(alist);
        alist.remove("Tim");
        // displaying elements
        System.out.println(alist);
    }
}
      `,
  },
  {
    title: `3.(a) Write a Java program to illustrate the concept of Single level and Multi level Inheritance. `,
    code: `
    // Single level
    class A {
        A() {
            System.out.println("Inside A's Constructor");
        }
    }
    
    class B extends A {
        B() {
            System.out.println("Inside B's Constructor");
        }
    }
    
    class Singledemo {
        public static void main(String args[]) {
            B b1 = new B();
        }
    }
    
    // Multi level
    class A {
        A() {
            System.out.println("Inside A's Constructor");
        }
    }
    
    class B extends A {
        B() {
            System.out.println("Inside B's Constructor");
        }
    }
    
    class C extends B {
        C() {
            System.out.println("Inside C's Constructor");
        }
    }
    
    class Multidemo {
        public static void main(String args[]) {
            C c1 = new C();
        }
    }
    
      `,
  },
  {
    title: `11.(b) Write a JDBC program to display contents of all records of staff table`,
    code: `
import java.sql.*;

public class DisplayRecords {
    public static void main(String[] args) throws SQLException {
        String url = "jdbc:mysql://localhost:3306/staff_database";
        String username = "username";
        String password = "password";
        Connection connection = DriverManager.getConnection(url, username, password);
        Statement statement = connection.createStatement();
        String query = "SELECT * FROM staff";
        ResultSet resultSet = statement.executeQuery(query);
        while (resultSet.next()) {
            int id = resultSet.getInt("id");
            String name = resultSet.getString("name");
            String position = resultSet.getString("position");
            double salary = resultSet.getDouble("salary");
            System.out.format("%d, %s, %s, %.2f\n", id, name, position, salary);
        }
        connection.close();
    }
}
      `,
  },
  {
    title: `4.(a) Write a Java program to demonstrate the Interfaces & Abstract Classes`,
    code: `
abstract class Shape {
    abstract double area();
}

class Rectangle extends Shape {
    double l = 12.5, b = 2.5;

    double area() {
        return l * b;
    }
}

class Triangle extends Shape {
    double b = 4.2, h = 6.5;

    double area() {
        return 0.5 * b * h;
    }
}

class Square extends Shape {
    double s = 6.5;

    double area() {
        return 4 * s;
    }
}

class Shapedemo {
    public static void main(String[] args) {
        Rectangle r1 = new Rectangle();
        Triangle t1 = new Triangle();
        Square s1 = new Square();
        System.out.println("The area of rectangle is: " + r1.area());
        System.out.println("The area of triangle is: " + t1.area());
        System.out.println("The area of square is: " + s1.area());
    }
}
      `,
  },
  {
    title: `17.(a) Write a Java program that works as a simple calculator. Use a grid layout to arrange buttons
      for the digits and for the +, -, *, % operations. Add a text field to display the result.`,
    code: `

/* Program to create a Simple Calculator */
import java.awt.*;
import java.awt.event.*;
import java.applet.*;
import javax.swing.*;

/*
<applet code="MyCalculator" width=300 height=300>
</applet>
*/
public class MyCalculator extends Applet implements
        ActionListener {
    int num1, num2, result;
    TextField T1;
    Button NumButtons[] = new Button[10];
    Button Add, Sub, Mul, Div, clear, EQ;
    char Operation;
    Panel nPanel, CPanel, SPanel;

    public void init() {
        nPanel = new Panel();
        T1 = new TextField(30);
        nPanel.setLayout(new FlowLayout(FlowLayout.CENTER));
        nPanel.add(T1);
        CPanel = new Panel();
        CPanel.setBackground(Color.white);
        CPanel.setLayout(new GridLayout(5, 5, 3, 3));
        for (int i = 0; i < 10; i++) {
            NumButtons[i] = new Button("" + i);
        }
        Add = new Button("+");
        Sub = new Button("-");
        Mul = new Button("*");
        Div = new Button("/");
        clear = new Button("clear");
        EQ = new Button("=");
        T1.addActionListener(this);
        for (int i = 0; i < 10; i++) {
            CPanel.add(NumButtons[i]);
        }
        CPanel.add(Add);
        CPanel.add(Sub);
        CPanel.add(Mul);
        CPanel.add(Div);
        CPanel.add(EQ);
        SPanel = new Panel();
        SPanel.setLayout(new FlowLayout(FlowLayout.CENTER));
        SPanel.setBackground(Color.yellow);
        SPanel.add(clear);
        for (int i = 0; i < 10; i++) {
            NumButtons[i].addActionListener(this);
        }
        Add.addActionListener(this);
        Sub.addActionListener(this);
        Mul.addActionListener(this);
        Div.addActionListener(this);
        clear.addActionListener(this);
        EQ.addActionListener(this);
        this.setLayout(new BorderLayout());
        add(nPanel, BorderLayout.NORTH);
        add(CPanel, BorderLayout.CENTER);
        add(SPanel, BorderLayout.SOUTH);
    }

    public void actionPerformed(ActionEvent ae) {
        String str = ae.getActionCommand();
        char ch = str.charAt(0);
        if (Character.isDigit(ch))
            T1.setText(T1.getText() + str);
        else if (str.equals("+")) {
            num1 = Integer.parseInt(T1.getText());
            Operation = '+';
            T1.setText("");
        }
        if (str.equals("-")) {
            num1 = Integer.parseInt(T1.getText());
            Operation = '-';
            T1.setText("");
        }
        if (str.equals("*")) {
            num1 = Integer.parseInt(T1.getText());
            Operation = '*';
            T1.setText("");
        }
        if (str.equals("/")) {
            num1 = Integer.parseInt(T1.getText());
            Operation = '/';
            T1.setText("");
        }
        if (str.equals("%")) {
            num1 = Integer.parseInt(T1.getText());
            Operation = '%';
            T1.setText("");
        }
        if (str.equals("=")) {
            num2 = Integer.parseInt(T1.getText());
            switch (Operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    try {
                        result = num1 / num2;
                    } catch (ArithmeticException e) {
                        result = num2;
                        JOptionPane.showMessageDialog(this, "Divided by zero");
                    }
                    break;
            }
            T1.setText("" + result);
        }
        if (str.equals("clear")) {
            T1.setText("");
        }
    }
}
      `,
  },
  {
    title: `7.(a) Write a Java program to illustrate the concept of Thread synchronization. `,
    code: `
public class ThreadSyncExample {
    public static void main(String[] args) {
        // Create a shared object
        SharedObject shared = new SharedObject();

        // Create two threads that use the shared object
        Thread thread1 = new Thread(new SyncThread(shared));
        Thread thread2 = new Thread(new SyncThread(shared));

        // Start the threads
        thread1.start();
        thread2.start();
    }
}

class SyncThread implements Runnable {
    private SharedObject shared;

    public SyncThread(SharedObject shared) {
        this.shared = shared;
    }

    public void run() {
        // Synchronize on the shared object
        synchronized (shared) {
            // Access the shared object
            shared.increment();
        }
    }
}

class SharedObject {
    private int count = 0;

    public void increment() {
        count++;
    }
}

      `,
  },
  {
    title: `16.(b) Write a JDBC program to create a table of student with minimum of 5 fields and insert 5 records
      using MYSQL database.`,
    code: `
import java.sql.*;

public class CreateTb {
    public static void main(String a[]) throws Exception {
        Class.forName("com.mysql.jdbc.Driver"); // throws CNFException
        Connection con = DriverManager.getConnection("" + "jdbc:mysql://localhost/mahi", "root", "root");
        Statement stmt = con.createStatement();
        String v = "create table customer1(cphnno int primary key,cfirst Varchar(20),clast varchar(20),age int,address Varchar(20))";
        stmt.executeUpdate(v);
        // System.out.println("Executed->"+v);
    }
}
      `,
  },
  {
    title: `16.(a) Write a Java applet program to implement Adapter classes`,
    code: `
import java.awt.*;
import java.awt.event.*;

public class MouseAdapterExample extends MouseAdapter {
    Frame f;

    MouseAdapterExample() {
        f = new Frame("Mouse Adapter");
        f.addMouseListener(this);
        f.setSize(300, 300);
        f.setLayout(null);
        f.setVisible(true);
    }

    public void mouseClicked(MouseEvent E){
        Graphics g = f.getGraphics()
        g.setColor(Color.BLUE);
        g.fillOval(e.getX(), e.getY(), 30, 30);
    }

    public static void main(String[] args) {
        new MouseAdapterExample();
    }
}
      `,
  },
  {
    title: `8.(a) Write a Java program that correctly implements producer consumer problem using the concept
      of inter thread communication.`,
    code: `
class A {
    int n;
    boolean b = false;

    synchronized int get() {
        if (!b)
            try {
                wait();
            } catch (Exception e) {
                System.out.println(e);
            }
        System.out.println("Got:" + n);
        b = false;
        notify();
        return n;
    }

    synchronized void put(int n) {
        if (b)
            try {
                wait();
            } catch (Exception e) {
                System.out.println(e);
            }
        this.n = n;
        b = true;
        System.out.println("Put:" + n);
        notify();
    }
}

class Producer implements Runnable {
    A a1;
    Thread t1;

producer(A a1)
{
this.a1=a1;
t1=new Thread(this);
t1.start(); }

    public void run() {
        for (int i = 1; i <= 10; i++) {
            a1.put(i);
        }
    }
}

class Consumer implements Runnable {
    A a1;
    Thread t1;

    Consumer(A a1) {
        this.a1 = a1;
        t1 = new Thread(this);
        t1.start();
    }

    public void run() {
        for (int j = 1; j <= 10; j++) {
            a1.get();
        }
    }
}

class Interdemo {
    public static void main(String args[]) {
        A a1 = new A();
        Producer p1 = new Producer(a1);
        Consumer c1 = new Consumer(a1);
    }
}      
      `,
  },
  {
    title: `1.(a) Write a Java program to illustrate the concept of class with method overloading `,
    code: `
class A {
    int l = 10, b = 20;

    int area() {
        return l * b;
    }

    int area(int l, int b) {
        return l * b;
    }
}

class Overmethoddemo {
    public static void main(String args[]) {
        A a1 = new A();
        int r1 = a1.area();
        System.out.println("The area is: " + r1);
        int r2 = a1.area(5, 20);
        System.out.println("The area is: " + r2);
    }
}

    `,
  },
  {
    title: `1.(b) Write a JDBC program to demonstrate 2 records are updated from staff table.`,
    code: `
import java.sql.*;

public class UpdateStaffRecords {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/staff_database";
        String username = "username";
        String password = "password";
        try (Connection connection = DriverManager.getConnection(url,
                username, password)) {
            String updateSql1 = "UPDATE staff SET staff_name = ? WHERE staff_id = ?";
            String updateSql2 = "UPDATE staff SET position = ? WHERE staff_id = ?";
            try (PreparedStatement updateStatement1 = connection.prepareStatement(updateSql1);
                    PreparedStatement updateStatement2 = connection.prepareStatement(updateSql2)) {
                updateStatement1.setString(1, "New Staff Name 1");
                updateStatement1.setInt(2, 1);
                updateStatement2.setString(1, "New Position 2");
                updateStatement2.setInt(2, 2);
                int rowsUpdated1 = updateStatement1.executeUpdate();
                int rowsUpdated2 = updateStatement2.executeUpdate();
                if (rowsUpdated1 > 0) {
                    System.out.println("Successfully updated record with staff_id 1");
                }
                if (rowsUpdated2 > 0) {
                    System.out.println("Successfully updated record with staff_id 2");
                }
            }
        } catch (SQLException e) {
            System.err.format("SQL State: %s\n%s", e.getSQLState(),
                    e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
    `,
  },
  {
    title: `5.(a) Write a Java program to implement the concept of exception handling. `,
    code: `
class Trydemo {
    public static void main(String args[]) {
        try {
            int a = 10, b = 0;
            int c = a / b;
            System.out.println(c);
        } catch (ArithmeticException e) {
            System.out.println(e);
        }
        System.out.println("After the catch statement");
    }
}
      `,
  },
  {
    title: `9.(a) Write a Java program to illustrate collection classes like Array List, Linked List, Tree map and
        Hash map.`,
    code: `
  import java.util.ArrayList;
import java.util.LinkedList;
import java.util.TreeMap;
import java.util.HashMap;
import java.util.Map;

public class CollectionClasses {
  public static void main(String[] args) {
    // ArrayList demonstration
    ArrayList<String> arrayList = new ArrayList<>();
    arrayList.add("item1");
    arrayList.add("item2");
    arrayList.add("item3");
    System.out.println("ArrayList: " + arrayList);
    
    // LinkedList demonstration
    LinkedList<String> linkedList = new LinkedList<>();
    linkedList.add("item1");
    linkedList.add("item2");
    linkedList.add("item3");
    System.out.println("LinkedList: " + linkedList);
    
    // TreeMap demonstration
    TreeMap<String, Integer> treeMap = new TreeMap<>();
    treeMap.put("item1", 1);
    treeMap.put("item2", 2);
    treeMap.put("item3", 3);
    System.out.println("TreeMap: " + treeMap);
    
    // HashMap demonstration
    HashMap<String, Integer> hashMap = new HashMap<>();
    hashMap.put("item1", 1);
    hashMap.put("item2", 2);
    hashMap.put("item3", 3);
    System.out.println("HashMap: ");
    for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
      System.out.println(entry.getKey() + ": " + entry.getValue());
    }
  }
}

        `,
  },
  {
    title: `14.(a) Write a Java applet program to implement Colour and Graphics class `,
    code: `

import java.applet.*;
/*
<applet code="SetGraphicsColorExample" width=200 height=100>
</applet>
 */

import javafx.scene.paint.Color;

public class SetGraphicsColorExample extends Applet {
    public void paint(Graphics g) {
        /*
         * Graphic objects like lines and rectangles usescurrent
         * foreground color.
         * 
         * To change the current graphic coloruse
         * void setColor(Color c) method of GraphicsClass.
         */
        Color customColor = new Color(10, 10, 255);
        g.setColor(customColor);
        g.drawLine(10, 10, 30, 30);
        g.setColor(Color.RED);
        g.fillRect(40, 40, 40, 40);
        g.setColor(Color.GREEN);
        g.fillRect(80, 80, 40, 40);
        g.draw3DRect(81, 91, 40, 40, true);
    }
}
      `,
  },
  {
    title: `6.(b) Write a JDBC program to delete 2 records whose id=2 &6 from staff table`,
    code: `
import java.sql.*;

public class DeleteRecords {
    public static void main(String[] args) {
        try (
                // Step 1: Allocate a database 'Connection' object
                Connection conn = DriverManager.getConnection(
                        "jdbc:mysql://hostname:port/database", "username", "password");
                // Step 2: Allocate a ' Statement' object in the Connection
                Statement stmt = conn.createStatement();) {
            // Step 3: Execute a SQL DELETE statement
            String sqlDelete = "DELETE FROM staff WHERE id in (2, 6)";
            int countDeleted = stmt.executeUpdate(sqlDelete);
            System.out.println(countDeleted + " records deleted.");
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
}
      `,
  },
  // Add more code snippets here
];
