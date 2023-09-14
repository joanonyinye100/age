
let num1=365;
let num2 = 52;
let num3 = 12 ;
let num4= 90;
let btnSubmit = document.getElementById("btnSubmit");
let result = document.getElementById("result");
let age = document.getElementById("age");


btnSubmit.addEventListener("click", display);

 function display(){
    let age =parseInt(document.getElementById("age").value);
    let year = num4 - age;
    let days = year * num1;
    let weeks = year * num2;
    let month = year * num3;
    result.textContent= "You have " + days + " Days, " + weeks + " Weeks, "  + month  + " Months.";

}





