import inquirer from "inquirer";
const CURRENCY = {
    USD: 1, //ALL ARE BASED ON USD
    EUR: 0.91,
    PKR: 280,
    INR: 74.54,
    GBP: 0.76
};
let userAnswer = await inquirer.prompt([{
        name: "from",
        type: "list", choices: ["PKR", "USD", "INR", "GBP", "EUR"],
        message: "ENTER FROM CURRENCY"
    }, {
        name: "to",
        type: "list", choices: ["PKR", "USD", "INR", "GBP", "EUR"],
        message: "ENTER TO CURRENCY"
    }, {
        name: "amount",
        type: "number",
        message: "enter ur amount"
    }]);
