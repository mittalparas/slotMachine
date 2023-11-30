// 1. Deposit some money
// 2. determine no of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberofLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on: ");
    const numberOfLines = parseFloat(depositAmount);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines. Pls try again.");
    } else {
      return numberOfLines;
    }
  }
};

const depositAmount = deposit();
console.log(depositAmount);
