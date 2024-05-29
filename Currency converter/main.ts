import inquirer from "inquirer"

const currency : any = {
    USD: 1, //Base currency
    EUR: 0.9, 
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
    [
        {
           name:"from",
           message:"Enter From Currency",
           type:"list",
           choices:["USD","EUR","GBP","INR","PKR"]
        },
        {
            name:"to",
            message:"Enter To Currency",
            type:"list",
            choices:["USD","EUR","GBP","INR","PKR"]
        },
        {
            name:"amount",
            message:"Enter Your Amount",
            type:"number",
        }
    ]
);

let fromAmount = currency[user_answer.from] //exchange rate
let toAmount = currency[user_answer.to] //exchange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount //USD base currency //4
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);



