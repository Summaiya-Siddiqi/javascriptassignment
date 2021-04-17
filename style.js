// Chapter no 1
// Q no 1:    Write a script to greet your website visitor using JS alert box.
function greet(){
    alert("Welcome to JAWAN PAKISTAN JavaScript Course Website.");
}
// Q no 2:    Write a script to display following message on your web  page:
function checker(){
    alert("Error! please enter a valid password.");
}
// Q no 3:   Write a script to display following message on your web page: (Hint : Use line break)
function messagebreak(){
    alert("Welcom to JS Land...\n Happy Coding!");
}
// Q no 4:     Write a script to display following messages in sequence:
function messagesequence(){
    alert("Welcome to JS Land...");
    alert("Happy Coding! \n Prevent this page from creating additional dialogs");
}
// Q no 5:      Generate the following message through browser’s developer console:
 function console(){
    alert("Hello! I can JS through my web browser console");
    alert("Uncommit the code in the file for console code");
 }
//    alert("Hello! I can JS through my web browser console");

//    console.log("Hello! I can JS through my web browser console");

//  Q no 6:      Make use of alerts in your new/existing HTML & CSS  project.
// alert("Welcome to JAVASCRIPT Website");
function welcome()
{
    alert("Welcome to JAVASCRIPT Website");
}
//  Q no 7:       Practice placement of <script></script> element in following sections of your project in exercise 6: a. Head b. Body (before your page’s HTML)c. Body (inside your page’s HTML)d. Body (after your page’s HTML
function scriptbtn(){
    alert("Check html code for script element project");
}
// *************************************************************************************************************************************************
// Chapter no 2
function codecheck(){
    alert("Check the style.js file for COMMIT Question");
}
// Q no 1:  Declare a variable called username.
var username;
//Q no 2:  Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = ("SUMMAIYA SIDDIQI");
// Q no 3 Write script to
//a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message
//c) Display the message in alert box.
var message ="hello World";
function chap2message(){
    alert(message);
}
//Q no 4  Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var name ="Summaiya siddiqi";
var age =23 +"year old";
var  qualification =" Certified HSC Student ";
function biodata(){
    alert("name: "+name);
    alert("age: "+age);
    alert("qualification :"+qualification);
}
//Q no 5 :Write a script to display the following alert using one JS variable:
var dish="pizza \n pizz \n piz \n pi \n p";
function pizzabreak(){
    alert(dish);
}
//Q no 6:  Declare a variable called email and assign to it a string that 
//represents your Email Address(e.g. example@example.com). 
//Show the blow mentioned message in an alert box.(Hint: use 
//string concatenation)
var email="summaiya@gmail.com";
function mail(){
alert("My email adress is "+email);
}
// Q no 7:   Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book="A smarter \n way to learn JavaScript";
function bookname(){
alert("I am trying to learn from the Book " +book);
}
// Q no 8 : Write a script to display this in browser through JS
function htmlcontent(){
    document.write("Yah! I can write HTML content through JavaScript");
}

// Q no 9  Store following string in a variable and show in alert and browser through JS
var design ="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";

// for alert
function stringdesign(){
    document.write(design);
    alert(design);
}
//***************************************************************************************************************************************************

//Chapter no 3 
//Q no 1 . Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 23;
function myage(){
    alert("I am "+ age +" year old");
}
//Q no 2 . Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var $value = 14 ;
function trackvalue(){
    alert("you have visited this site "+ $value +" times");
}
//Q no 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthyear = 1998;
function year(){
    document.write("My birth year is  " + birthyear + "</br>  Data type of my declared variable is number ");
}
//Q no 4 A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
//a. Visitor’s name
//b. Product title
//c. Quantity i.e. how many products a visitor wants to order
//Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var Visitor_name = "John Doe";
var _Product_title = "T-shirt";
 var Quantity = 5;
 function storeinfo(){
     document.write( Visitor_name +" ordered "+ Quantity +" " +_Product_title+" on XYZ Clothing store" );
 }
 //************************************************************************************************************************************************* */
 //Chapter no 4 
 // Q no 1 . Declare 3 variables in one statement.
 var value , name , salary ;
 function variable(){
    alert("var value; \n var name; \n var salary;");
 }
 //Q no 2 Declare 5 legal & 5 illegal variable names.
 function checkcode(){
     alert("Check the legal and illegal variable  in JS file");
 }
//legal variables
var $salary; var _value; var _1_value; var $fruit; var _Product_title;
//illegal variables
//  var 11fruit; var  6salary; var -firstvalue;  var 96abc; var -Product_quality;

//Q no 3 
// . Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS ________
function myfunction(){
document.write("<h2>Rules for naming JS variables</h2> ");
   
    document.write(" Variable names can only contain , number ,$ and _ . For example: $my_1stVariable </br>");
    document.write(" Variables must begin with a letter,$ or _ . For example: $name, _name or name </br>");
    document.write(" Variable names are case sensitive </br>");
    document.write(" Variable names should not be JS keywords")
}
//********************************************************************************************************************************************* */
//Chapter no 5
//Qno 1 . Write a program that take two numbers & add them in a vanew variable. Show the result in your browser.
var x=3;
var y=5;
var z= x+y
function add(){
    document.write("Sum of "+ x + " and " +y+ " is "+z);

}
//Q no 2 . Repeat task1 for subtraction, multiplication, division & modulus
var x=3;
var y= 5;
var sub = x-y;
var mult = x*y;
var div = x/y;
var mod =x%y; 
function mathrule(){

    document.write("Subtraction of "+ x + " and " +y+ " is "+sub+ "</br>");
    document.write("Multiply of "+ x + " and " +y+ " is "+mult+ "</br>");
    document.write("division of "+ x + " and " +y+ " is "+div+ "</br>");
    document.write("Modulus of "+ x + " and " +y+ " is "+mod+ "</br>");

}
//Q no 3 . Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value  by 3. 
// l. Output : “The remainder is : 0”.
function rules(){
 var value;
 document.write("Value after variable declaration is : "+value+"</br>");
 var value =5;
 document.write("Initial value: "+value +"</br>");
 var a=++value;
 document.write("Value after increment is:"+a +"</br>");
 var b =a+7;
 document.write("Value after addition is:"+b +"</br>");
 var c=--b;
 document.write("Value after decrement is:"+c +"</br>");
 var output=c%3
 document.write("The remainder is :"+output);

}
//Q no 4 Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output 
var ticket = 600;
var totalcost= 5*600;
function movie(){
    document.write(" Total Cost to buy 5 tickets to a movie is "+ totalcost+"PKR");
}
//Q no 5
function table(){
    var table = 9;
    var length = 10;
    var i = 1;
    
    document.write("Multiplication table: "+ table);
    while(i <= length)
    { 
     document.write("<br>"+i+" * "+table+" = " +(i * table));
     i++;
    }
}
//Q no 6 The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
function temp(){
    var celsius = 25;
var celsiusInF =((celsius*9)/5+32);
document.write(celsius + " °C is"+ celsiusInF+" °F" +"</br>");
var fahrenheit = 70;
var fahrenheitInC =((fahrenheit-32)*5)/9;
document.write(fahrenheit + " °F is"+fahrenheitInC +" °C" +"</br>");
}
//Q no 7 Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser

var item1 =650;
var item2 = 100;
var quantity1 =3;
var quantity2 = 7;
var shipcharge = 100;
var total = 650*3+100*7+100;
function store(){
    document.write("<h1>Shopping Cart </h1>");
    document.write(" Price of item 1 is "+item1 +"</br>");
    document.write(" quantity of item 1 is " +quantity1+"</br>");
    document.write(" Price of item 1 is "+item2 +"</br>");
    document.write(" quantity of item 2 is "+quantity2 +"</br>");
    document.write("  Shipping charges "+shipcharge +"</br></br>");
    document.write("Total cost of your order is"+total)
}
//Q no 8 . Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser
var totalmarks=980;
var marksobtained=804;
var percentage = (marksobtained/totalmarks)*100;
function marksheet(){
    document.write("<h1>Mark Sheet </h1>");
    document.write("Total marks :"+totalmarks);
    document.write("Obtained marks :"+marksobtained);
    document.write("Total marks :"+percentage);

}
//Q no 9  Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)
var usdollar =10;
var saudiriyal = 25;
var total = usdollar*104.80+saudiriyal*28;
function converter(){
    document.write("<h1>Currency in PKR </h1>");
    document.write("Total currency in PKR : "+total)
}
//Q no 10  Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var num = 2;
var a =num+5*10/2;
function calculate(){
    document.write("arithmetic in following sequence:"+a);
}
//Q no 11 1. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored  values.
// Output them to the screen like so: “They are either NN or NN years old
var currentyear =2021;
var b = 1998;
var currentage = currentyear-b;
var newcurrentage= currentage-b;
function current(){
    document.write("<h1>Age Calculator</h1>");

    document.write("Current year: "+currentyear+"</br>");
    document.write("Birth year: " + b +"</br>");
    document.write("Your Age is either : "+ currentage+" or "+newcurrentage+" year old </br>");
}
//Q no 12 The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
function geometry(){

var radius =20;
var circumference= 2*3.142*20;//Circumference of a circle = 2 π r , π = 3.142
var area = radius*radius*3.142;
document.write("<h1>The Geometrizer</h1>");

document.write("Radius of a circle: "+radius+"</br>");
document.write("The circumference is: "+circumference+"</br>");
document.write("The area is: "+area+"</br>");
}
//Q no 13 The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”
function Lifetime(){
    var fsnack ="choclatechips" 
    var age =15;
    var maxage = 65;
    var snackperday=3;
  var totalsnack = (365*snackperday)*(maxage - age);
 
    document.write("<h1>The Lifetime Supply Calculator</h1>");
    document.write("Favorite snack: "+fsnack+"</br>");
   document.write("Current Age: "+ age+"</br>");
   document.write("Estimated Maximum Age: "+ maxage +"</br>");
  document.write(" Amount of snack per day: "+snackperday+"</br>");
  document.write("You will need "+totalsnack+" "+fsnack+" to last you until the ripe old age of "+ maxage);
}
//************************************************************************************************************* */
//Chapter no 6 to 9
//Q no 1 Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:


function arithematic(){
    var a =10;
    document.write("Result: </br>");
    document.write("The value of a is:"+ a +"</br>");
    document.write("......................................</br></br></br>");
    document.write("The value of ++a is:"+ ++a +"</br>");
    document.write("Now the value of a is:"+ a +"</br></br></br>");
  
    document.write("The value of a++ is:"+ a++ +"</br>");
    document.write("Now the value of a is:"+ a +"</br></br></br>");

    document.write("The value of --a is:"+ --a +"</br>");
    document.write("Now the value of a is:"+ a +"</br></br></br>");
 
    document.write("The value of a-- is:"+a-- +"</br>");
    document.write("Now the value of a is:"+ a +"</br></br></br>");


}
//Q no 2What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;     1
// --a - --b; 1-0
// --a - --b + ++b; 1-0+1
// --a - --b + ++b + b-- 1-0+1+1

function result(){
    var a =2;
    var b=1;
var result= --a - --b + ++b + b--;

    document.write("a is "+a+"</br>");
    document.write("b is "+b+"</br>");
    document.write("result is "+result+"</br>");

}
//Q no 3 Write a program that takes input a name from user & greet the user.
function input(){
    var name = prompt("Please enter your name ");
    alert("hello welcome to my wesite "+name);

}
//Q no 4 Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.
function table2(){
    var num = prompt("Enter the table number ","5");
    var num= parseInt(num);
    var length = 10;
    var i = 1;
    
    document.write("Multiplication table: "+ num);
    while(i <= length)
    { 
     document.write("<br>"+num+" * "+i+" = " +(i * num));
     i++;
    }
}

//Q no 5. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)
function table() {
    var subject1 = prompt("Enter first subject Name");
    var subject2 = prompt("Enter Second subject Name");
    var subject3 = prompt("Enter Third subject Name");
    document.getElementById('sub1').innerHTML = "<b>" + subject1 + "</b>"
    document.getElementById('sub2').innerHTML = "<b>" + subject2 + "</b>"
    document.getElementById('sub3').innerHTML = "<b>" + subject3 + "</b>"


    var totalMarks = 100;
    document.getElementsByClassName("tMarks")[0].innerHTML = totalMarks;
    document.getElementsByClassName("tMarks")[1].innerHTML = totalMarks;
    document.getElementsByClassName("tMarks")[2].innerHTML = totalMarks;
    document.getElementsByClassName("oMarks")[0].innerHTML = "<b>" + (totalMarks * 3) + "</b>";

    var obtained1 = parseInt(prompt("Enter " + subject1 + " Marks"))
    var obtained2 = parseInt(prompt("Enter " + subject2 + " Marks"))
    var obtained3 = parseInt(prompt("Enter " + subject3 + " Marks"))

    document.getElementById("obtained1").innerHTML = obtained1;
    document.getElementById("obtained2").innerHTML = obtained2;
    document.getElementById("obtained3").innerHTML = obtained3;
    document.getElementById("totalObtained").innerHTML = "<b>" + (obtained1 + obtained2 + obtained3) + "</b>";


    var totalObtained = obtained1 + obtained2 + obtained3;
    console.log(totalObtained)
    var subj1Percentage = (obtained1 / totalMarks) * 100;
    var subj2Percentage = (obtained2 / totalMarks) * 100;
    var subj3Percentage = (obtained3 / totalMarks) * 100;
    document.getElementById("p1").innerHTML = subj1Percentage + "%";
    document.getElementById("p2").innerHTML = subj2Percentage + "%";
    document.getElementById("p3").innerHTML = subj3Percentage + "%";


    var totalPercentage = (totalObtained / 300) * 100;
    document.getElementById("tp").innerHTML = "<b>" + (totalPercentage) + "% </b> ";
}


//**************************************************************************************** */
//chapter 9to10
//Q no 1  Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”
function light(){
    var city =prompt("please enter your city");
    if(city="Karachi".toLocaleUpperCase){
        alert("Welcome to city of lights");
    }
}
//Q no 2 Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.
function maleinput(){
    var gender=prompt("Enter your gender");
    if( gender=="male"){
        alert("Good Morning Sir");
    }
    else if(gender=="female"){
        alert("Good Morning Ma'am");
    }
}
//Q no 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
function colorinput(){
    var color=prompt("Enter any color of traffic signal");
    if( color=="red"){
        alert("Vehical must stop");
    }
    else if(color=="yellow"){
        alert("Vehical should  get ready to move");
    }
    else if(color=="green"){
        alert("Vehical can move now");
    }
}
//Q no 4 Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”
function fuel(){
    var fuelcar =prompt("Enter the fuel in car");
    if(fuelcar<="0.25liters"){
        alert("Please Refill the fuel in your car");
    }
    else{
        alert("Car has efficiet fuel");
    }
}

//Q no 5 Run this script, & check whether alert message would be
// displayed or not. Record the outputs
 function record(){
    var a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");
    }
    var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
 
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }
 }
 //Q no 6Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:
function chap6(){
var totMarks =300;
var markObt = prompt("Enter your obtained marks:");
var per = markObt/totMarks*100;
var grade;
if(markObt>=80){
    alert("Grade: "+"A-one "+"Remarks: "+" Excellent");
}
else if(markObt>=70){
    alert("Grade: "+"A "+"Remarks: "+" Good");
}
else if(markObt>=60){
    alert("Grade: "+" B "+"Remarks: "+" You need to improve");
}
else{
    alert("Grade: "+" Fail "+"Remarks: "+" Failed soory");
    
}
document.write("<h1>Mark Sheet</h1> </br>");
document.write("Total Marks: "+totMarks+"</br>");
document.write("Marks obtained: "+markObt+"</br>");
document.write("Percentage : "+per+"</br>");
document.write("Grade:B "+""+"</br>");
document.write("Remarks: Good "+""+"</br>");
}
//Q no 7  Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

function guessnumber(){
    var guessnum =6;
    let number= parseInt(prompt("Guess the number from 1 to 10:"));
    while( number !== guessnum){
        number= parseInt(prompt("Guess the number from 1 to 10:"));
    }
    if(number == guessnum){
        alert("Bingo! Correct answer");
    
    }
    else if(number<=guessnum){
        alert("Close enough to the correct answer");
    }

}

//Q no 8  Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.
function divisible(){
    var givennum=prompt("Enter the number to check that given number is divisible by 3");
    if(givennum /3){
        alert("the given number is divisible by 3  by "+givennum/3);
    }
    else{
        alert("Not divisible by 3 ");
    }
}



//Q no 9  Write a program that checks whether the given input is an even number or an odd number.
function evenodd(){
    var userval=prompt("Enter the number to check that given number is odd & even");
    if(userval%2 == 0){
        alert("Number is Even");
    }
    else{
        alert("Number is Odd");
    }
}



//Q no 10   Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
function taketemp(){
    var T =prompt("Enter the temperature number");
    if(T>40){
        alert("It is too hot outside");
    }
    else if(T> 30){
        alert("The Weather today is Normal");
    }
    else if(T> 20){
        alert("Today’s Weather is cool");
    }
    else if(T> 10){
        alert("OMG! Today’s weather is so Cool");
    }
    else{
        alert("Not found the result")
    }

}



//Q no 11 Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user
function procalculator(){
var firstnumber= +prompt("Enter the 1st value");
var secondnumber = +prompt("Enter the 2nd value");
var operation =prompt("+, -, *, /, %");
var sum = firstnumber+secondnumber;
var sub = firstnumber-secondnumber;
var multi = firstnumber*secondnumber;
var divi = firstnumber/secondnumber;
var modu = firstnumber%secondnumber;

if(operation=='+'){
    alert("Addition is "+ sum);
}
 else if(operation=='-'){
    alert("subtraction is "+ sub);
}
else if(operation=='*'){
    alert("Multiplication is "+ multi);
}
else if(operation=='/'){
    alert("Division is "+ divi);
}
else if(operation=='%'){
    alert("Modulus is "+ modu);
}

}
//************************************************************************************** */
// Chapter no 12 to 13
//Q no 1 Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).
function character(){
    var ch = prompt("Enter a character");
if(ch==ch.toLocaleUpperCase()){
    alert("Character is UPPER case ");
}
else if(ch==ch.toLocaleLowerCase()){
    alert("Character is LOWER case");
}
else {
    alert("Character is  Number");
}
}
//Q no 2 . Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
function twovar(){
    var a =prompt("Enter a value");
var b= prompt("Enter b value");
if(a<=b){
    document.write("B is greater number");
}
else if(a==b){
    document.write("both are equal");
}
else{
    document.write("something wrong");
}

}
//Q no 3  Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero
function numbers(){
    var number=parseInt(prompt("Enter the number"));
if(number>0){
    document.write("The number is positive");
}
else if(number==0){
    document.write("The number is zero");
}
else{
    document.write("The number is negative");
}
}

//Q no 4 Write a program that takes a character (i.e. string of 
//length 1) and returns true if it is a vowel, false otherwise
function vowel(){
     
var letter =prompt("Enter the vowel")
        var vowels = ["a", "e", "i", "o", "u"];
    
        for(var i = 0; i < 1; i++){
            if(letter === vowels[i]){
                alert(" given input is vowel true")
             }
             else{
             alert(" given input is not vowel false")
        }
    }
    
    
       
    
    
}
    

//Q no 5 . Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.
function password(){
    
var correctpassword=1234;
var userpassword =Number(prompt("Enter the password"));
if(userpassword==NaN){
    alert("Please enter your password");
}
else if(userpassword=correctpassword){
    alert("Correct!");
}
else{
    alert("Wrong password");
}
}



//Q no 6 . This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
function statement(){
    var greeting;
    var hour = 13;
    if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
    }
    else{
    greeting = "Good evening";
    alert(greeting);
    }
}


//Q no 7  Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements
function time(){
    var time = Number(prompt("ENTER THE number time"));
if(time>=0 ||time<10){
    alert("Good morning");
}
else if(time>=12 ||time<16){
    alert("Good afternoon");
}
else if(time>=16 || time<20){
    alert("Good evening"); 
}
else{
    alert("Good night");
}
}