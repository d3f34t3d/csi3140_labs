
class Dice {
    static roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

// Test the dice roll
console.log('Rolling dice:', Dice.roll());
