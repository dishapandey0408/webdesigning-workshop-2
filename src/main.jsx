// function calculateResult(){

//   let n=document.getElementById("subjects").value;
//   let total=0;
//   for(let i=1;i<=n;i++){
//     let marks= parseFloat(prompt("Enter marks for subject"+ i));
//     total=total+marks;
//   }
//   let average= total/n;
//   let grade;
//   let result;
//   if(average>=90){
//     grade="A+";
//   }
//   else if(average>=75){
//     grade="A";
//   }

// }





// function calculateResult(){

//   let n = document.getElementById("subjects").value;
//   let total = 0;

//   for(let i = 1; i <= n; i++){
//     let marks = parseFloat(prompt("Enter marks for subject " + i));
//     total = total + marks;
//   }

//   let average = total / n;
//   let grade;

//   if(average >= 90){
//     grade = "A+";
//   }
//   else if(average >= 75){
//     grade = "A";
//   }
//   else if(average >= 60){
//     grade = "B";
//   }
//   else if(average >= 50){
//     grade = "C";
//   }
//   else{
//     grade = "F";
//   }

//   document.getElementById("result").innerHTML =
//   "Total Marks: " + total +
//   "<br>Average: " + average.toFixed(2) +
//   "<br>Grade: " + grade;

// }   



import java.util.Scanner;
public class StudentMarks {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int math, science, english, computer, hindi;
        System.out.print("Enter marks for Mathematics: ");
        math = sc.nextInt();
        System.out.print("Enter marks for Science: ");
        science = sc.nextInt();
        System.out.print("Enter marks for English: ");
        english = sc.nextInt();
        System.out.print("Enter marks for Computer: ");
        computer = sc.nextInt();
        System.out.print("Enter marks for Hindi: ");
        hindi = sc.nextInt();
        int total = math + science + english + computer + hindi;
        double average = total / 5.0;
        char grade;
        if (average >= 90) {
            grade = 'A';
        } else if (average >= 75) {
            grade = 'B';
        } else if (average >= 60) {
            grade = 'C';
        } else if (average >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        System.out.println("\nTotal Marks = " + total);      System.out.println("Average Marks = " + average);
        System.out.println("Grade = " + grade);
        sc.close();
    }
}
