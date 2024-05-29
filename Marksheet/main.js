#! /usr/bin/env node
import inquirer from "inquirer";
// Askig For Roll Number
let roll = await inquirer.prompt({
    type: "number",
    name: "num1",
    message: "Enter Your Roll Number",
});
//Roll Number
let rollNum = roll.num1;
//Checking Roll Number
if (rollNum === 5291) {
    //Asking For Marks
    let marks = await inquirer.prompt([
        {
            name: "english",
            type: "number",
            message: "Enter Your English Number:",
        },
        {
            name: "urdu",
            type: "number",
            message: "Enter Your Urdu Number:",
        },
        {
            name: "math",
            type: "number",
            message: "Enter Your Math Number:",
        },
    ]);
    //Extract Marks
    let English = marks.english;
    let Urdu = marks.urdu;
    let Math = marks.math;
    //Percentage
    let totalMarks = 300;
    let obtainMarks = English + Urdu + Math;
    let percent = (obtainMarks / totalMarks) * 100;
    //Amswers
    console.log("Name:Simran");
    console.log("Father Name: M.Shafi Shaikh");
    console.log(`English Marks = ${English} out of 100`);
    console.log(`Urdu Marks = ${Urdu} out of 100`);
    console.log(`Math Marks = ${Math} out of 100`);
    console.log(`Obtain Marks = ${obtainMarks} Total Marks = ${totalMarks}`);
    console.log(`Percentage =${percent}`);
}
else {
    console.log('Invalid Roll Number');
}
