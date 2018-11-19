/*
 * Hello. 2 points.
 */

function hello() {

  // WRITE YOUR EXERCISE 1 CODE HERE
  var div = document.getElementById ("output1")
    div.innerHTML = "Hello, AP Computer Science Principles!"


  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  // WRITE YOUR EXERCISE 2 CODE HERE
  name = prompt("Please enter your name");
  var div = document.getElementById ("output2");
    div.innerHTML = "Hello, " + name + "!";

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE
 var cf = ((cels * 1.8) + 32).toFixed(2);
 var div = document.getElementById ("output3");
  div.innerHTML = cels + " " + "degrees Celsius equals" + " " + cf + " degrees Fahrenheit.";
  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE
var fc = ((fahr - 32) / 1.8).toFixed(2);
var div = document.getElementById ("output4");
 div.innerHTML = fahr + " " + "degrees Fahrenheit equals" + " " + fc +" degrees Celsius.";
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
let miles = 0;
let yards = 0;
let feet = 0;

miles = inches / 63360;
miles = Math.floor(miles);
inches = inches % 63360;
yards = inches / 36;
yards = Math.floor(yards);
inches = inches % 36;
feet = inches / 12;
feet = Math.floor(feet);
inches = inches % 12;

var div = document.getElementById ("output5");
 div.innerHTML = "Miles: " + miles + "<br/>" + "Yards: " + yards + "<br/>" + "Feet: " + feet + "<br/>" + "Inches: " + inches;
  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE
 let kilometers = 0;
 let meters = 0;

 kilometers = centimeters / 100000
 kilometers = Math.floor(kilometers)
 centimeters = centimeters % 100000
 meters = centimeters / 100
 meters = Math.floor(meters)
 centimeters = centimeters % 100

 var div = document.getElementById ("output6");
  div.innerHTML = "Kilometers: " + kilometers + "<br/>" + "Meters: " + meters + "<br/>" + "Centimeters: " + centimeters;

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE
  let gallons = 0;
  let quarts = 0;
  let pints = 0;
  let cups = 0;

  gallons = fluidOunces / 128;
  gallons = Math.floor(gallons);
  fluidOunces = fluidOunces % 128;
  quarts = fluidOunces / 32;
  quarts = Math.floor(quarts);
  fluidOunces = fluidOunces % 32;
  pints = fluidOunces / 16;
  pints = Math.floor(pints);
  fluidOunces = fluidOunces % 16;
  cups = fluidOunces / 8;
  cups = Math.floor(cups);
  fluidOunces = fluidOunces % 8;

  var div = document.getElementById ("output7");
   div.innerHTML = "Gallons: " + gallons + "<br/>" + "Quarts: " + quarts + "<br/>" + "Pints: " + pints + "<br/>" + "Cups: " + cups + "<br/>" + "Fluid Ounces: " + fluidOunces;


  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE
  let tons = 0;
  let pounds = 0;

  tons = ounces / 32000;
  tons = Math.floor(tons);
  ounces = ounces % 32000;
  pounds = ounces / 16;
  pounds = Math.floor(pounds);
  ounces = ounces % 16;

  var div = document.getElementById ("output8");
   div.innerHTML = "Tons: " + tons + "<br/>" + "Pounds: " + pounds + "<br/>" + "Ounces: " + ounces;
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE
  let dollars = 0;
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;

  dollars = pennies / 100;
  dollars = Math.floor(dollars);
  pennies = pennies % 100;
  quarters = pennies / 25;
  quarters = Math.floor(quarters);
  pennies = pennies % 25;
  dimes = pennies / 10;
  dimes = Math.floor(dimes);
  pennies = pennies % 10;
  nickels = pennies / 5;
  nickels = Math.floor(nickels);
  pennies = pennies % 5;

  var div = document.getElementById ("output9");
   div.innerHTML = "Dollars: " + dollars + "<br/>" + "Quarters: " + quarters + "<br/>" + "Dimes: " + dimes + "<br/>" + "Nickels: " + nickels + "<br/>" + "Pennies: " + pennies;
  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE
  let quarters = 0;
  let dimes = 0;
  let nicks = 0;
  let pennies = 0;

  quarters = amount / 0.25;
  quarters = Math.floor(quarters);
  amount = amount % 0.25;
  dimes = amount / 0.10;
  dimes = Math.floor(dimes);
  amount = amount % 0.10;
  nicks = amount / 0.05;
  nicks = Math.floor(nicks);
  amount = amount % 0.05;
  pennies = amount / 0.01;
  pennies = Math.floor(pennies);
  amount = amount % 0.01;

  amount = quarters + dimes + nicks + pennies;

  var div = document.getElementById ("output10");
   div.innerHTML = amount + " coins.";
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
