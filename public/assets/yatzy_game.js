class YatzyGame {
    constructor() {
        this.rollNumber = 0;
        this.diceValues = [0, 0, 0, 0, 0];
        this.keepDice = [false, false, false, false, false];
    }

    rollDice() {
        if (this.rollNumber < 3) {
            for (let i = 0; i < this.diceValues.length; i++) {
                if (!this.keepDice[i]) {
                    this.diceValues[i] = Dice.roll();
                }
            }
            this.rollNumber++;
        } else {
            console.log("No more rolls left in this turn.");
        }
    }

    resetTurn() {
        this.rollNumber = 0;
        this.diceValues = [0, 0, 0, 0, 0];
        this.keepDice = [false, false, false, false, false];
    }
}

// Test the YatzyGame class
let game = new YatzyGame();
game.rollDice();
console.log('After 1st roll:', game.diceValues);
game.keepDice[0] = true; // Keep the first dice
game.rollDice();
console.log('After 2nd roll:', game.diceValues);
game.resetTurn();
console.log('After reset:', game.diceValues, game.rollNumber);