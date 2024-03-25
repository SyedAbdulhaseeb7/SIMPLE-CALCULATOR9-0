#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const game2 = async () => {
    let game3 = await inquirer.prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter Your FIRST VALUE",
        },
        {
            type: "input",
            name: "num2",
            message: "Enter Your SECOND VALUE",
        },
        {
            message: "Select Operator",
            name: "operation",
            type: 'list',
            choices: ["addition", "subtraction", "multiplication", "division"],
        }
    ]);
    calculate(game3);
};
const calculate = (game3) => {
    let { operation, num1, num2 } = game3;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;
    if (operation === 'addition') {
        result = num1 + num2;
    }
    else if (operation === 'subtraction') {
        result = num1 - num2;
    }
    else if (operation === 'multiplication') {
        result = num1 * num2;
    }
    else if (operation === 'division') {
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero");
            return;
        }
        result = num1 / num2;
    }
    else {
        console.log('Invalid operation');
        return;
    }
    const cosmicCoral = chalk.hex('#FF6F61');
    console.log(`Result: ${cosmicCoral(result)}!`);
};
game2();
