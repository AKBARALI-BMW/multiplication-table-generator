// First, declare the variables for the table
var n;
var num1;

// Prompt the user to input the number up to which the table will be printed
n = window.prompt("Enter the number up to which to print the table:");
num1 = window.prompt("Enter the table number:");

// Function to print the table
function printTable(n, num1) {
    var tableContent = ""; // Initialize an empty string to hold the table content
    for (var i = 1; i <= n; i++) {
        tableContent += i + " * " + num1 + " = " + (i * num1) + "<br>"; // Append each row of the table to the string
    }
    document.getElementById("span").innerHTML = tableContent; // Set the innerHTML of the span element to the table content
}

// Call the function to print the table
printTable(n, num1);
