export default [
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
    title: `1.(c) Write a java program to generate a series of Fibonacci series upto n terms.`,
    code: `
class FibonacciExample1 {
    public static void main(String args[]) {
        int n1 = 0, n2 = 1, n3, i, count = 10;
        System.out.print(n1 + " " + n2);
        for (i = 2; i < count; ++i) {
            n3 = n1 + n2;
            System.out.print(" " + n3);
            n1 = n2;
            n2 = n3;
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
    title: `2.(a) Write a Java Program that reads a line of integers, and then displays each integer, and the
      sum of all the integers (Use String Tokenizer class of java. util)`,
    code: `
import java.util.*;

class StringTokenDemo {
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter a line of numbers: ");
        String input = s.next();
        StringTokenizer st = new StringTokenizer(input, "@");
        int sum = 0;
        while (st.hasMoreTokens()) {
            int n = 0;
            n = Integer.parseInt(st.nextToken());
            System.out.println("Number is: " + n);
            sum += n;
        }
        System.out.println("Sum of the numbers is: " + sum);
    }
}

      `,
  },
  {
    title: `2.(b) Write a JDBC program to demonstrate 2 records are updated from employee table.`,
    code: `
import java.sql.*;

public class UpdateEmployeeRecords {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/employee_database";
        String username = "username";
        String password = "password";
        try (Connection connection = DriverManager.getConnection(url,
                username, password)) {
            String updateSql1 = "UPDATE employee SET first_name = ? WHERE employee_id = ?";
            String updateSql2 = "UPDATE employee SET last_name = ? WHERE employee_id = ?";
            try (PreparedStatement updateStatement1 = connection.prepareStatement(updateSql1);
                    PreparedStatement updateStatement2 = connection.prepareStatement(updateSql2)) {
                updateStatement1.setString(1, "New First Name 1");
                updateStatement1.setInt(2, 1);
                updateStatement2.setString(1, "New Last Name 2");
                updateStatement2.setInt(2, 2);
                int rowsUpdated1 = updateStatement1.executeUpdate();
                int rowsUpdated2 = updateStatement2.executeUpdate();
                if (rowsUpdated1 > 0) {
                    System.out.println("Successfully updated record with employee_id 1");
                }
                if (rowsUpdated2 > 0) {
                    System.out.println("Successfully updated record  with employee_id 2");
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
    title: `2.(c) Write a java program to calculate factorial of a given number.`,
    code: `
public class Factorial {
    public static void main(String[] args) {
        int num = 10;
        long factorial = 1;
        for (int i = 1; i <= num; ++i) {
            // factorial = factorial * i;
            factorial *= i;
        }
        System.out.printf("Factorial of %d = %d", num, factorial);
    }
}
      `,
  },
  {
    title: `2.(d) Write a java program to Implement LinkedList`,
    code: `
import java.util.*;

public class JavaExample {
    public static void main(String args[]) {
        LinkedList<String> list = new LinkedList<String>();
        // Adding elements to the Linked list
        list.add("Steve");
        list.add("Carl");
        list.add("Raj");
        // Adding an element to the first position
        list.addFirst("Negan");
        // Adding an element to the lastposition
        list.addLast("Rick");
        // Adding an element to the 3rd position
        list.add(2, "Glenn");
        // Iterating LinkedList
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
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
    title: `3.(b) Write a JDBC program to demonstrate 2 records are updated from film table.`,
    code: `
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class JDBCUpdateExample {
    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/filmdb", "username", "password");
            String updateSQL1 = "UPDATE film SET rating = ? WHERE film_id = ?";
            String updateSQL2 = "UPDATE film SET rental_rate = ? WHERE film_id = ?";
            PreparedStatement statement1 = con.prepareStatement(updateSQL1);
            PreparedStatement statement2 = con.prepareStatement(updateSQL2);

            statement1.setDouble(1, 8.0);
            statement1.setInt(2, 1);
            statement1.executeUpdate();

            statement2.setDouble(1, 3.99);
            statement2.setInt(2, 2);
            statement2.executeUpdate();

            System.out.println("Records updated successfully");
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
      `,
  },
  {
    title: `3.(c) Write a java program to print the pattern of stars in pyramid shape. `,
    code: `
import java.io.*;

// Java code to demonstrate star patterns
public class GeeksForGeeks {
    // Function to demonstrate printing pattern
    public static void printStars(int n) {
        int i, j;
        // outer loop to handle number of rows
        // n in this case
        for (i = 0; i < n; i++) {
            // inner loop to handle number of columns
            // values changing acc. to outer loop
            for (j = 0; j <= i; j++) {
                // printing stars
                System.out.print("* ");
            }
            // ending line after each row
            System.out.println();
        }
    }

    // Driver Function
    public static void main(String args[]) {
        int n = 5;
        printStars(n);
    }
}
      `,
  },
  {
    title: `3.(d) Write a java program to Sort & reverse the LinkedList elements`,
    code: `
import java.util.Collections;
import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {
        // Create a LinkedList
        LinkedList<Integer> linkedList = new LinkedList<>();

        // Add some elements to the LinkedList
        linkedList.add(3);
        linkedList.add(2);
        linkedList.add(1);
        linkedList.add(4);
        // Sort the LinkedList
        Collections.sort(linkedList);

        System.out.println("Sorted LinkedList: " + linkedList);
        // Reverse the LinkedList
        Collections.reverse(linkedList);

        System.out.println("Reversed LinkedList: " + linkedList);
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
    title: `4.(b) Write a JDBC program to demonstrate 2 records are updated from student table.`,
    code: `
import java.sql.*;

public class UpdateRecords {
    public static void main(String[] args) {
        try (
                Connection conn = DriverManager.getConnection(
                        "jdbc:mysql://localhost:3306/student_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
                        "myuser", "xxxx");
                Statement stmt = conn.createStatement();) {
            String strUpdate = "update student set name='John', age=20 where id=1";
            System.out.println("The SQL query is: " + strUpdate);
            int countUpdated = stmt.executeUpdate(strUpdate);
            System.out.println(countUpdated + " records affected.");
            strUpdate = "update student set name='David', age=22 where id=2";
            System.out.println("The SQL query is: " + strUpdate);
            countUpdated = stmt.executeUpdate(strUpdate);
            System.out.println(countUpdated + " records affected.");
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
}
      `,
  },
  {
    title: `4.(c) Write a java program to reverse the given number.
      `,
    code: `
public class NumberReverse {
    public static void main(String[] args) {
        // The number to reverse
        int number = 12345;

        // Reverse the number
        int reversedNumber = reverseNumber(number);

        System.out.println("Original number: " + number);
        System.out.println("Reversed number: " + reversedNumber);
    }

    public static int reverseNumber(int number) {
        int reversedNumber = 0;
        int remainder;

        while (number != 0) {
            remainder = number % 10;
            reversedNumber = reversedNumber * 10 + remainder;
            number /= 10;
        }

        return reversedNumber;
    }
}

      `,
  },
  {
    title: `4.(d) Write a java program to Implement push() and pop() on Stack`,
    code: `
import java.util.Stack;

class Main {
    public static void main(String[] args) {

        // create an object of Stack class
        Stack<String> animals = new Stack<>();

        // push elements to top of stack
        animals.push("Dog");
        animals.push("Horse");
        animals.push("Cat");
        System.out.println("Stack: " + animals);

        // pop element from top of stack
        animals.pop();
        System.out.println("Stack after pop: " + animals);
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
    title: `5.(b) Write a JDBC program to delete 2 records whose id=1 &3 from film table.`,
    code: `
import java.sql.*;

public class DeleteRecords {
    public static void main(String[] args) {
        try (
                // Step 1: Allocate a database 'Connection' object
                Connection conn = DriverManager.getConnection(
                        "jdbc:mysql://hostname:port/database", "username", "password");
                // Step 2: Allocate a 'Statement' object in the Connection
                Statement stmt = conn.createStatement();) {
            // Step 3: Execute a SQL DELETE statement
            String sqlDelete = "DELETE FROM film WHERE id in (1, 3)";
            int countDeleted = stmt.executeUpdate(sqlDelete);
            System.out.println(countDeleted + " records deleted.");
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
}

      `,
  },
  {
    title: `5.(c) Write a java program to find the frequency of the given element in an array.`,
    code: `
public class ElementFrequency {
    public static void main(String[] args) {
        // The array to search
        int[] array = { 1, 2, 3, 2, 3, 4, 3, 2, 1 };

        // The element to search for
        int element = 3;

        // Find the frequency of the element
        int frequency = findFrequency(array, element);

        System.out.println("The element " + element + " appears " +
                frequency + " times in the array.");
    }

    public static int findFrequency(int[] array, int element) {
        int frequency = 0;

        for (int i = 0; i < array.length; i++) {
            if (array[i] == element) {
                frequency++;
            }
        }

        return frequency;
    }
}
      `,
  },
  {
    title: `5.(d) Write a java program to display HashTable content`,
    code: `
import java.util.Hashtable;
import java.util.Enumeration;

public class HashtableExample {
    public static void main(String[] args) {
        Enumeration names;
        String key;
        // Creating a Hashtable
        Hashtable<String, String> hashtable = new Hashtable<String, String>();
        // Adding Key and Value pairs to
        hashtable.put("Key1", "Chaitanya");
        hashtable.put("Key2", "Ajeet");
        hashtable.put("Key3", "Peter");
        hashtable.put("Key4", "Ricky");
        hashtable.put("Key5", "Mona");
        names = hashtable.keys();
        while (names.hasMoreElements()) {
            key = (String) names.nextElement();
            System.out.println("Key: " + key + " & Value: " +
                    hashtable.get(key));
        }
    }
}

      `,
  },
  {
    title: `6.(a) Write a Java program to illustrate the concept of threading using Thread Class and runnable
      Interface. `,
    code: `
// (i)Creating multiple threads using Threadclass
class A extends Thread {
    public void run() {
        try {
            for (int i = 1; i <= 10; i++) {
                sleep(1000);
                System.out.println("good morning");
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

class B extends Thread {
    public void run() {
        try {
            for (int j = 1; j <= 10; j++) {
                sleep(2000);
                System.out.println("hello");
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

class C extends Thread {
    public void run() {
        try {
            for (int k = 1; k <= 10; k++) {
                sleep(3000);
                System.out.println("welcome");
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

class threaddemo {
    public static void main(String args[]) {
        A a1 = new A();
        B b1 = new B();
        C c1 = new C();
        a1.start();
        b1.start();
        c1.start();
    }
}

// (ii)Creating multiple threads using Runnableinterface

class A implements Runnable {
    public void run() {
        try {
            for (int i = 1; i <= 10; i++) {
                Thread.sleep(1000);
                System.out.println("good morning");
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

class B implements Runnable {
    public void run() {
        try {
            for (int j = 1; j <= 10; j++) {
                Thread.sleep(2000);
                System.out.println("hello");
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

class C implements Runnable {
    public void run() {
        try {
            for (int k = 1; k <= 10; k++) {
                Thread.sleep(3000);
                System.out.println("welcome");
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

class Runnabledemo {
    public static void main(String args[]) {
        A a1 = new A();
        B b1 = new B();
        C c1 = new C();
        Thread t1 = new Thread(a1);
        Thread t2 = new Thread(b1);
        Thread t3 = new Thread(c1);
        t1.start();
        t2.start();
        t3.start();
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
  {
    title: `6.(c) Write a java program to find the duplicate elements of a given array`,
    code: `
import java.util.HashSet;
import java.util.Set;

public class DuplicateElements {
    public static void main(String[] args) {
        int[] array = { 1, 2, 3, 4, 2, 7, 8, 8, 3 };

        // Use a set to keep track of unique elements
        Set<Integer> uniqueElements = new HashSet<>();
        // Use another set to keep track of duplicate elements
        Set<Integer> duplicateElements = new HashSet<>();

        // Iterate through the array
        for (int i : array) {
            // If the element is not in the set of unique elements, add it
            if (!uniqueElements.contains(i)) {
                uniqueElements.add(i);
            } else {
                // If the element is already in the set of unique elements, it's a duplicate
                // Add it to the set of duplicates
                duplicateElements.add(i);
            }
        }

        // Print out the duplicates
        System.out.println("Duplicate elements are: " + duplicateElements);
    }
}

      `,
  },
  {
    title: `6.(d) Write a java program to copy elements from HashSet to Array`,
    code: `
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class HashSetToArray {
    public static void main(String[] args) {
        // Create a HashSet
        Set<String> set = new HashSet<>();

        // Add some elements to the HashSet
        set.add("apple");
        set.add("banana");
        set.add("cherry");
        set.add("durian");

        // Convert the HashSet to an array
        String[] array = set.toArray(new String[set.size()]);

        System.out.println("Original HashSet: " + set);
        System.out.println("Converted array: " +
                Arrays.toString(array));
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
    title: `7.(b) Write a JDBC program to delete 2 records whose id=5 &8 from employee table.`,
    code: `
import java.sql.*;

public class DeleteRecords {
    public static void main(String[] args) {
        try (
                // Step 1: Allocate a database 'Connection' object
                Connection conn = DriverManager.getConnection(
                        "jdbc:mysql://hostname:port/database", "username", "password");
                // Step 2: Allocate a 'Statement' object in the Connection
                Statement stmt = conn.createStatement();) {
            // Step 3: Execute a SQL DELETE statement
            String sqlDelete = "DELETE FROM employee WHERE id in (5, 8)";
            int countDeleted = stmt.executeUpdate(sqlDelete);
            System.out.println(countDeleted + " records deleted.");
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
}
      `,
  },
  {
    title: `7.(c) Write a java program to print the sum of all the elements of a given array.`,
    code: `
public class ArraySum {
    public static void main(String[] args) {
        // The array to sum
        int[] array = { 1, 2, 3, 4, 5 };

        // Print the sum of the elements
        System.out.println("The sum of the elements is: " + sumElements(array));
    }

    public static int sumElements(int[] array) {
        int sum = 0;

        for (int i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }
}
      `,
  },
  {
    title: `7.(d) Write a java program to copy a Tree Map content to another Tree Map`,
    code: `
import java.util.TreeMap;

public class TreeMapCopy {
    public static void main(String[] args) {
        // Create a TreeMap
        TreeMap<Integer, String> map1 = new TreeMap<>();

        // Add some elements to the TreeMap
        map1.put(1, "apple");
        map1.put(2, "banana");
        map1.put(3, "cherry");
        map1.put(4, "durian");

        // Create another TreeMap
        TreeMap<Integer, String> map2 = new TreeMap<>();

        // Copy the content of the first TreeMap to the second TreeMap
        map2.putAll(map1);

        System.out.println("Original TreeMap: " + map1);
        System.out.println("Copied TreeMap: " + map2);
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
    title: `8.(b) Write a JDBC program to display contents of all records of student table.`,
    code: `
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class StudentTableDisplay {
    public static void main(String[] args) {
        // Load the JDBC driver
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println("Error loading JDBC driver: " + e.getMessage());
        }

        // Establish a connection to the database
        String url = "jdbc:mysql://localhost:3306/student_database";
        String username = "username";
        String password = "password";
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(url, username, password);
        } catch (SQLException e) {
            System.out.println("Error connecting to database: " + e.getMessage());
        }

        // Execute a SELECT statement to retrieve the student records
        Statement stmt = null;
        ResultSet rs = null;
        try {
            stmt = conn.createStatement();
            String sql = "SELECT * FROM student";
            rs = stmt.executeQuery(sql);

            // Print the contents of each student record
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                String email = rs.getString("email");
                int age = rs.getInt("age");

                System.out.println("ID: " + id + ", Name: " + name + ", Email: " + email + ", Age: " + age);
            }
        } catch (SQLException e) {
            System.out.println("Error executing SELECT statement: " + e.getMessage());
        } finally {
            // Close the ResultSet and Statement objects
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    // Ignore
                }
            }
            if (stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException e) {
                    // Ignore
                }
            }
        }

        // Close the connection
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                // Ignore
            }
        }
    }
}
      `,
  },
  {
    title: `8.(c) Write a java program to add given 2 matrices`,
    code: `
public class MatrixAddition {
    public static void main(String[] args) {
        // The two matrices to add
        int[][] matrix1 = { { 1, 2, 3 }, { 4, 5, 6 } };
        int[][] matrix2 = { { 7, 8, 9 }, { 10, 11, 12 } };

        // Add the matrices
        int[][] result = addMatrices(matrix1, matrix2);

        // Print the result
        for (int[] row : result) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
    }

    public static int[][] addMatrices(int[][] matrix1, int[][] matrix2) {
        int rows = matrix1.length;
        int cols = matrix1[0].length;

        int[][] result = new int[rows][cols];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = matrix1[i][j] + matrix2[i][j];
            }
        }

        return result;
    }
}
      `,
  },
  {
    title: `8.(d) Write a java program to get the value of a specified key in a map`,
    code: `
import java.util.HashMap;
import java.util.Map;

public class MapKeyValue {
    public static void main(String[] args) {
        // Create a map
        Map<String, Integer> map = new HashMap<>();

        // Add some elements to the map
        map.put("apple", 1);
        map.put("banana", 2);
        map.put("cherry", 3);
        map.put("durian", 4);

        // Get the value for the key "cherry"
        int value = map.get("cherry");

        System.out.println("The value for the key 'cherry' is: " + value);
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
    title: `9.(b) Write a JDBC program to display contents of all records of film table`,
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
    title: `9.(c) Write a java program to print the count of chars in a given string.`,
    code: `
    import java.util.HashMap;
    import java.util.Map;
    
    public class CharacterFrequency {
        public static void main(String[] args) {
            String str = "the quick brown fox jumps over the lazy dog";
            // Create a HashMap to store the characters and their frequencies
            Map<Character, Integer> map = new HashMap<>();
            // Iterate through each character in the string
            for (char c : str.toCharArray()) {
                // If the character is not already in the map, add it with a frequency of 1
                if (!map.containsKey(c)) {
                    map.put(c, 1);
                }
                // Otherwise, increment the frequency by 1
                else {
                    map.put(c, map.get(c) + 1);
                }
            }
            // Print out the frequencies of each character
            for (Map.Entry<Character, Integer> entry : map.entrySet()) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }
    }  
        `,
  },
  {
    title: `9.(d) Write a java program to associate the specified value with the specified key in a HashMap`,
    code: `
import java.util.HashMap;

public class HashMapExample {
  public static void main(String[] args) {
    HashMap<String, Integer> map = new HashMap<>();
    
    // Adding key-value pairs to the map
    map.put("first", 1);
    map.put("second", 2);
    map.put("third", 3);
    
    System.out.println("Original HashMap: " + map);
    
    // Associating value with a key
    map.put("third", 4);
    
    System.out.println("HashMap after associating value with key: " + map);
  }
}

        `,
  },
  {
    title: `10.(a) Write a Java program to illustrate Legacy classes like Vector, Hashtable, Dictionary &
      Enumeration interface`,
    code: `
import java.util.Enumeration;
import java.util.Vector;
import java.util.Hashtable;
import java.util.Dictionary;

public class LegacyClasses {
  public static void main(String[] args) {
    // Vector demonstration
    Vector<String> vector = new Vector<>();
    vector.add("item1");
    vector.add("item2");
    vector.add("item3");
    System.out.println("Vector: " + vector);
    
    // Hashtable demonstration
    Hashtable<String, Integer> hashtable = new Hashtable<>();
    hashtable.put("item1", 1);
    hashtable.put("item2", 2);
    hashtable.put("item3", 3);
    System.out.println("Hashtable: " + hashtable);
    
    // Dictionary demonstration
    Dictionary<String, Integer> dictionary = new Hashtable<>();
    dictionary.put("item1", 1);
    dictionary.put("item2", 2);
    dictionary.put("item3", 3);
    System.out.println("Dictionary: " + dictionary);
    
    // Enumeration demonstration
    Enumeration<String> enumeration = vector.elements();
    System.out.println("Enumeration: ");
    while (enumeration.hasMoreElements()) {
      System.out.println(enumeration.nextElement());
    }
  }
}

      `,
  },
  {
    title: `10.(b) Write a JDBC program to display contents of all records of customer table`,
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
    title: `10.(c) Write a java program to print the reverse of a given string`,
    code: `
import java.util.Scanner;

public class ReverseString {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter a string: ");
    String str = sc.nextLine();
    
    // Using StringBuilder class
    StringBuilder sb = new StringBuilder(str);
    System.out.println("Reverse of the string using StringBuilder: " + sb.reverse().toString());
    
    // Using iteration
    System.out.print("Reverse of the string using iteration: ");
    for (int i = str.length() - 1; i >= 0; i--) {
      System.out.print(str.charAt(i));
    }
  }
}

      `,
  },
  {
    title: `10.(d) Write a java program to insert a given element into a priority queue`,
    code: `
import java.util.PriorityQueue;

public class InsertIntoPriorityQueue {
  public static void main(String[] args) {
    PriorityQueue<Integer> queue = new PriorityQueue<>();
    
    // Adding elements to the queue
    queue.offer(10);
    queue.offer(30);
    queue.offer(20);
    System.out.println("Priority queue before insertion: " + queue);
    
    // Inserting an element into the queue
    int element = 25;
    queue.offer(element);
    System.out.println("Priority queue after insertion: " + queue);
  }
}

      `,
  },
  {
    title: `11.(a) Write a Java program to implement iteration over Collection using Iterator interface and List
      Iterator interface`,
    code: `
// iterator interface
class Test_Iterator {
    public static void main(String[] args) {
        ArrayList<String> ar = new ArrayList<String>();
        ar.add("ab");
        ar.add("bc");
        ar.add("cd");
        ar.add("de");
        Iterator it = ar.iterator();
        // Declaring Iterator
        while (it.hasNext()) {
            System.out.print(it.next() + " ");
        }
    }
}

// list iterator interface
class Test_ ListIterator
{

    public static void main(String[] args) {
        ArrayList<String> ar = new ArrayList<String>();
        ar.add("ab");
        ar.add("bc");
        ar.add("cd");
        ar.add("de");
        ListIteratorlitr = ar.listIterator();
        while (litr.hasNext()) // In forward direction
        {
            System.out.print(litr.next() + " ");
        }
        while (litr.hasPrevious()) // In backward direction
        {
            System.out.print(litr.previous() + " ");
        }
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
    title: `11.(c) Write a java program to find the frequency of characters in a given string`,
    code: `
import java.util.HashMap;
import java.util.Map;

public class CharacterFrequency {
    public static void main(String[] args) {
        String str = "the quick brown fox jumps over the lazy dog";
        // Create a HashMap to store the characters and their frequencies
        Map<Character, Integer> map = new HashMap<>();
        // Iterate through each character in the string
        for (char c : str.toCharArray()) {
            // If the character is not already in the map, add it with a frequency of 1
            if (!map.containsKey(c)) {
                map.put(c, 1);
            }
            // Otherwise, increment the frequency by 1
            else {
                map.put(c, map.get(c) + 1);
            }
        }
        // Print out the frequencies of each character
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}

      `,
  },
  {
    title: `11.(d) Write a java program to iterate through all elements in a tree set`,
    code: `
import java.util.Iterator;
import java.util.TreeSet;

public class TreeSetIteration {
    public static void main(String[] args) {
        // Create a TreeSet and add some elements
        TreeSet<String> set = new TreeSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");
        set.add("Date");
        set.add("Elderberry");
        // Get an iterator for the TreeSet
        Iterator<String> iterator = set.iterator();
        // Iterate through the elements in the TreeSet
        while (iterator.hasNext()) {
            String s = iterator.next();
            System.out.println(s);
        }
    }
}
      `,
  },
  {
    title: `12.(a) Write a Java program that reads a file name from the user, and then displays information
      about whether the file exists, whether the file is readable, whether the file is writable, the type of
      file and the length of the file in bytes. `,
    code: `
import java.io.*;

public class FileInfo {
    public static void main(String[] args) throws IOException {
        BufferedReaderbr = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("\nEnter A File Name:");
        String fName = br.readLine();
        File f = new File(fName);
        /*
         * The method exists() checks whether the given file exists in the current
         * directory or not.
         * The method returns a boolean value
         */
        String result = f.exists() ? "exists." : "does notexist.";
        System.out.println("\nThe given file " + result);
        if (f.exists()) {
            // The method canRead() checks whether the file is readable or not readable and
            // returnsa
            booleanvalue result = f.canRead() ? "readable." : "not readable.";
            System.out.println("The given file is " + result);
            // The method canWrite() checks whether the given file is writable or not and
            // returns a boolean
            value result = f.canWrite() ? "writable." : "not writable.";
            System.out.println("The given file is " + result);
            // The method length() returns the length of the given file in bytes
            System.out.println("The given file length is " + f.length() + " inbytes.");
            /*
             * If the filename ends with .jpg,.gif or .png, the given file is an imagefile
             * If the filename ends with .exe or .txt, the given file is an executable file
             * or a text file
             * respectively else the file type is unknown.
             * The method endsWith() returns true if the given string ends with the string
             * given as argument for
             * the method else it returns false
             */
            if (fName.endsWith(".jpg") || fName.endsWith(".gif") || fName.endsWith(".png")) {
                System.out.println("The given file is an image file.");
            } else if (fName.endsWith(".exe")) {
                System.out.println("The given file is an executable file.");
            } else if (fName.endsWith(".txt")) {
                System.out.println("The given file is a text file.");
            } else {
                System.out.println("The file type is unknown.");
            }
        }
    }
}
      `,
  },
  {
    title: `12.(b) Write a JDBC program to display contents of all records of employee table.`,
    code: `
import java.sql.*;

public class DisplayRecords {
    public static void main(String[] args) throws SQLException {
        String url = "jdbc:mysql://localhost:3306/employee_database";
        String username = "username";
        String password = "password";
        Connection connection = DriverManager.getConnection(url, username, password);
        Statement statement = connection.createStatement();
        String query = "SELECT * FROM employee";
        ResultSet resultSet = statement.executeQuery(query);
        while (resultSet.next()) {
            int id = resultSet.getInt("id");
            String name = resultSet.getString("name");
            String department = resultSet.getString("department");
            double salary = resultSet.getDouble("salary");
            System.out.format("%d, %s, %s, %.2f\n", id, name, department, salary);
        }
        connection.close();
    }
}

      `,
  },
  {
    title: `12.(c) Write a java program to search for a given element in an array.`,
    code: `
import java.util.Scanner;

public class SearchArray {
    public static void main(String[] args) {
        int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number to search for: ");
        int search = scanner.nextInt();
        boolean found = false;
        for (int i = 0; i < array.length; i++) {
            if (array[i] == search) {
                found = true;
                break;
            }
        }
        if (found) {
            System.out.println(search + " was found in the array.");
        } else {
            System.out.println(search + " was not found in the array.");
        }
    }
}
      `,
  },
  {
    title: `12.(d) Write a java program to create a new tree set, add some colors (string) and print out the tree set.`,
    code: `
import java.util.TreeSet;

public class TreeSetExample {
    public static void main(String[] args) {
        TreeSet<String> colors = new TreeSet<>();
        colors.add("Red");
        colors.add("Orange");
        colors.add("Yellow");
        colors.add("Green");
        colors.add("Blue");
        colors.add("Indigo");
        colors.add("Violet");
        System.out.println(colors);
    }
}
      `,
  },
  {
    title: `13.(a) Write a Java program to illustrate the concept of I/O Streams `,
    code: `
import java.io.*;

public class FileStreamTest {
    public static void main(String[] args) {
        try {
            byte bWrite[] = { 11, 21, 3, 40, 5 };
            OutputStreamos = new FileOutputStream("test.txt");
            for (int x = 0; x < bWrite.length; x++)
                os.write(bWrite[x]); // writes the bytes
            InputStream is = new FileInputStream("test.txt");
            System.out.println("Available bytes in file: " + is.available());
            int line;
            while ((line = is.read()) != -1) {
                System.out.print((int) line + " ");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
      `,
  },
  {
    title: `13.(b) Write a JDBC program to create a table of customer with minimum of 5 fields and insert 5
      records using MYSQL database.`,
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
    title: `13.(c) Write a java program to generate a series of n odd numbers. `,
    code: `
import java.util.Scanner;

public class odd {
    public static void main(String[] args) {
        int i, n;
        System.out.print("Input number of terms is: ");
        {
            Scanner in = new Scanner(System.in);
            n = in.nextInt();
            System.out.println("\nThe odd numbers are :");
            for (i = 1; i <= n; i++) {
                System.out.println(2 * i - 1);
            }
        }
    }
}
      `,
  },
  {
    title: `13.(d) Write a java program to sort HashMap by keys`,
    code: `
import java.util.*;

class sortmapKey {
    // This map stores unsorted values
    static Map<String, Integer> map = new HashMap<>();

    // Function to sort map by Key
    public static void sortbykey() {
        // TreeMap to store values of HashMap
        TreeMap<String, Integer> sorted = new TreeMap<>();
        // Copy all data from hashMap into TreeMap
        sorted.putAll(map);
        // Display the TreeMap which is naturally sorted
        for (Map.Entry<String, Integer> entry : sorted.entrySet())
            System.out.println("Key = " + entry.getKey() +
                    ", Value = " + entry.getValue());
    }

    // Driver Code
    public static void main(String args[]) {
        // putting values in the Map
        map.put("Jayant", 80);
        map.put("Abhishek", 90);
        map.put("Anushka", 80);
        map.put("Amit", 75);
        map.put("Danish", 40);
        // Calling the function to sortbyKey
        sortbykey();
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
    title: `14.(b) Write a JDBC program to create a table of film with minimum of 5 fields and insert 5 records
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
    title: `14.(c) Write a java program to generate a substring of a given string from the index position specified by
      the user.`,
    code: `
// working of substring(int begIndex, int endIndex)
public class Substr2 {
    public static void main(String args[]) {
        // Initializing String
        String Str = new String("Welcome to geeksforgeeks");
        // using substring() to extract substring
        // returns geeks
        System.out.print("The extracted substring is : ");
        System.out.println(Str.substring(10, 16));
    }
}
      `,
  },
  {
    title: `14.(d) Write a java program to check if HashMap is empty`,
    code: `
import java.util.*;

public class Hash_Map_Demo {
    public static void main(String[] args) {
        // Creating an empty HashMap
        HashMap<String, Integer> hash_map = new HashMap<String, Integer>();
        // Displaying the HashMap
        System.out.println("The Mappings are: " + hash_map);
        // Checking for the emptiness of Map
        System.out.println("Is the map empty? " +
                hash_map.isEmpty());
    }
}
      `,
  },
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
 }      `,
  },
  {
    title: `15.(b) Write a JDBC program to create a table of employee with minimum of 5 fields and insert 5
      records using MYSQL database.`,
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
    title: `15.(c) Write a java program to print the ascii value of a given character.`,
    code: `
public class PrintAsciiValueExample2 {
    public static void main(String[] String) {
        int ch1 = 'a';
        int ch2 = 'b';
        System.out.println("The ASCII value of a is: " + ch1);
        System.out.println("The ASCII value of b is: " + ch2);
    }
}
      `,
  },
  {
    title: `15.(d) Write a java program to add elements to the HashMap given the key and value data type is String`,
    code: `
public class GFG {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("vishal", 10);
        map.put("sachin", 30);
        map.put("vaibhav", 20);
        System.out.println("Size of map is:- " + map.size());
        System.out.println(map);
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
    title: `16.(c) Write a java program to convert a given decimal number into octal number.`,
    code: `
import java.io.*;

class GFG {
    static void decToOctal(int n) {
        int[] octalNum = new int[100];
        int i = 0;
        while (n != 0) {
            octalNum[i] = n % 8;
            n = n / 8;
            i++;
        }
        for (int j = i - 1; j >= 0; j--)
            System.out.print(octalNum[j]);
    }

    public static void main(String[] args) {
        int n = 33;
        decToOctal(n);
    }
}
      `,
  },
  {
    title: `16.(d) Write a java program to check if element(value) exists in ArrayList `,
    code: `
import java.util.ArrayList;
import java.util.List;

public class Demo {
    public static void main(String[] args) {
        List aList = new ArrayList();
        aList.add("A");
        aList.add("B");
        aList.add("C");
        aList.add("D");
        aList.add("E");
        System.out.println("The element C is available in ArrayList? " + aList.contains("C"));
        System.out.println("The element Z is available in ArrayList? " + aList.contains("Z"));
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
    title: `17.(b) Write a JDBC program to connect to MYSQL database.`,
    code: `
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectToMySQL {
  public static void main(String[] args) {
    try {
      // Register the JDBC driver
      Class.forName("com.mysql.cj.jdbc.Driver");
      
      // Open a connection to the database
      Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "username", "password");
      System.out.println("Connected to the MySQL database successfully!");
      
      // Close the connection
      conn.close();
    } catch (ClassNotFoundException | SQLException e) {
      System.out.println("Unable to connect to the MySQL database: " + e.getMessage());
    }
  }
}

      `,
  },
  {
    title: `17.(c) Write a java program to convert given decimal number into binary.`,
    code: `
public class DecimalToBinaryExample2 {
    public static void toBinary(int decimal) {
        int binary[] = new int[40];
        int index = 0;
        while (decimal > 0) {
            binary[index++] = decimal % 2;
            decimal = decimal / 2;
        }
        for (int i = index - 1; i >= 0; i--) {
            System.out.print(binary[i]);
        }
        System.out.println(); // new line
    }

    public static void main(String args[]) {
        System.out.println("Decimal of 10 is: ");
        toBinary(10);
        System.out.println("Decimal of 21 is: ");
        toBinary(21);
        System.out.println("Decimal of 31 is: ");
        toBinary(31);
    }
}
      `,
  },
  {
    title: `17.(d) Write a java program to traverse(or iterate) HashSet`,
    code: `
import java.util.*;

class Main {
    public static void main(String args[]) {
        HashSet<String> hashSet = new HashSet();
        hashSet.add("Jack");
        hashSet.add("Tom");
        hashSet.add("David");
        hashSet.add("John");
        hashSet.add("Steve");
        hashSet.add("Kevin");
        hashSet.add("Ryan");
        hashSet.add("Lyn");
        Iterator<String> iterator = hashSet.iterator();
        System.out.println("HashSet elements...");
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
      `,
  },
  //   {
  //     title: `2.`,
  //     code: `

  //     `,
  //   },
  // Add more code snippets here
];
