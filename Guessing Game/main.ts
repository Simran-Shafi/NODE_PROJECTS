import inquirer from "inquirer";

// 1) computer will generate a random number - Done.

// 2) user input for guesing number -Done.

// 3) compare user input with compare generated number and show result - Done 

const randomeNumber = Math.floor(Math.random() * 6 + 1);

console .log("!! Welcome to Simran's number guessing game!!");

const answers = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"please guess a number between 1-6:"
    },
]);

if(answers.userGuessedNumber === randomeNumber){
    console.log("Congratulation! You guessed right number.");
}
else{
    console.log("You guessed wrong number.");
}