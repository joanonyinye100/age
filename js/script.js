
const numOfDays=365;
const numOfWeeks = 52;
const numOfMonth = 12 ;
const expectedLifeSpan= 90;
let btnSubmit = document.getElementById("btnSubmit");
let result = document.getElementById("result");
let age = document.getElementById("age");


btnSubmit.addEventListener("click", display);

 function display(){
    let age =parseInt(document.getElementById("age").value);
    let expectedLifeCycle = expectedLifeSpan - age;
    let days = expectedLifeCycle * numOfDays;
    let weeks = expectedLifeCycle * numOfWeeks;
    let month = expectedLifeCycle * numOfWeeks;
    result.textContent= "You have " + days + " Days, " + weeks + " Weeks, "  + month  + " Months left.";
    if(age > 90){
        alert("Please enter correct Age");
    } else {
        result.textContent= "You have " + days + " Days, " + weeks + " Weeks, "  + month  + " Months left.";
    }

}





