import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1616;

let pinAnswer = await inquirer.prompt(
    [
      {
        name: "pin",
        type: "number",
        message: "enter your pin"
      }
    ]
);
  // 12345 === 1234 - false
if (pinAnswer.pin === myPin){
  console.log("Correct pin code!!!");

  let operationAns = await inquirer.prompt(
    [
      {
        name: "operation",
        type: "list",
        message: "please select option",
        choices: ["withDraw", "checkBalance", "fast cash"]
      }
    ]
);
  // console.log(operationAns);
  if (operationAns.operation === "withDraw"){
    let amountAns = await inquirer.prompt(
      [
        {
          name:"amount",
          message:"enter your amount",
          type:"number"
        }
      ]
);
   if(amountAns.amount > myBalance){
    console.log("insufficient balance")
}
else{
  console.log("your remaining balance is:" , myBalance -= amountAns.amount);
}
}
else if(operationAns.operation ==="fast cash"){ 
  let cashAns = await inquirer.prompt(
    [
      {
        name:"cash",
        type:"lsit",
        choise:["500","100","5000","10000","30000"],
        message:"please select amount"
      }
    ]
  );

 if (cashAns.cash > myBalance){
  console.log("insufficient balance");
 }

else{
 console.log("your remaining balance is:" ,myBalance -= cashAns.cash)             
}
} 
else if(operationAns.operation==="checkBalance"){
  console.log("your balance is:"+myBalance)
}
}

else{console.log("incorrect pincode")}