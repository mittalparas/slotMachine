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
    const lines = prompt("Enter the number of lines to bet on(1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines. Pls try again.");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet on each line: ");
    const numberBet = parseFloat(bet) * lines;

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
      console.log("Invalid bet number. Pls try again.");
    } else {
      return numberBet;
    }
  }
};

const balance = deposit();
const NumberofLines = getNumberofLines();
const bet = getBet(balance, NumberofLines);
console.log(bet)