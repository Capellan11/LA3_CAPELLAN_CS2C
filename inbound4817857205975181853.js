var grade = prompt("Enter your grade:");

grade>= 97? alert("Your equivalent Grade is “1.00” Excellent"):
    grade >= 94 && grade <= 96? alert("96: Your equivalent Grade is “1.25” Excellent"):
    grade >= 91 && grade <= 93? alert("Your equivalent Grade is “1.50” Above Average"):
    grade >= 88 && grade <= 90? alert("Your equivalent Grade is “1.75” Above Average"):
    grade >= 85 && grade <= 87? alert("Your equivalent Grade is “2.00” Average"):
    grade >= 82 && grade <= 84? alert("Your equivalent Grade is “2.25” Average"):
    grade >= 79 && grade <= 81? alert("Your equivalent Grade is “2.50” Below Average"):
    grade >= 76 && grade <= 78? alert("Your equivalent Grade is “2.75” Below Average"):
    grade == 75? alert("Your equivalent Grade is “3.00” Below Average"):
    grade >= 72 && grade <= 74? alert("Your equivalent Grade is “4.00” Poor"):
    alert("Your equivalent Grade is “5.00” Poor");

    if(grade >= 90){
        alert("Final Remarks: HIGH PASS, Candidate for Cum Laude");
    }else if(grade >= 80 || grade <= 89){
        alert("Final Remarks: AVERAGE PASS");
    }else if(grade >= 75 || grade <= 79){
        alert("Final Remarks: LOW PASS"); 
    }else{
        alert("FAILED, Needs Improvement");
    }