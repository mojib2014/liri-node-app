var inquirer = require("inquirer");

inquirer
 .prompt([
     {
       type: "input",
       message: "What is your name?",
       name: "username"
     },
     {
       type: "confirm",
       message: "What are you doing here?",
       name: "confirm",
       defualt: true
     },
     {
       type: "checkbox",
       choices: ["knife", "tv", "humbergar"],
       name: "choice"

     },
     {
       type: "password",
       message: "What is the secret password",
       name: "chicken"

     },
     {
       type: "confirm",
       message: "Are you sure",
       name: "confirm",
       default: true

     }

 ]) 
 .then(function(inquirerResponse) {
     if (inquirerResponse.confirm) {
         console.log("\nWelcome " + inquirerResponse.username);
         console.log("Your choice is " + inquirerResponse.choice)
     }
     
 })