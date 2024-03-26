#!/usr/bin/env node
import inquirer from "inquirer";
//1) computer will generate a random number .Done
//2) user input for guessing a number.Done
//3) Compare user input with computer generated number and show result.Done
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        type: "number",
        name: "userGuessedNumber",
        message: "Please Guess a number between 1-10: ",
    },]);
if (answers.userGuessedNumber == randomNumber) {
    console.log("Congratulations! you guessed a right number");
}
else {
    console.log("You, guessed a wrong Number");
}
