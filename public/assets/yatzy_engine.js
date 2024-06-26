class YatzyEngine {
    static calculateScore(diceValues, scoreBox) {
        switch (scoreBox) {
            case 'ones':
                return diceValues.filter(die => die === 1).reduce((acc, curr) => acc + curr, 0);
            case 'twos':
                return diceValues.filter(die => die === 2).reduce((acc, curr) => acc + curr, 0);
            case 'threes':
                return diceValues.filter(die => die === 3).reduce((acc, curr) => acc + curr, 0);
            case 'fours':
                return diceValues.filter(die => die === 4).reduce((acc, curr) => acc + curr, 0);
            case 'fives':
                return diceValues.filter(die => die === 5).reduce((acc, curr) => acc + curr, 0);
            case 'sixes':
                return diceValues.filter(die => die === 6).reduce((acc, curr) => acc + curr, 0);
            // Additional score boxes can be added here
            default:
                return 0;
        }
    }

    static updateOverallScore(game) {
        game.score = game.score || {};
        game.score.total = 0;
        game.score.bonus = 0;
        let upperSectionScore = 0;

        for (let scoreBox of ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes']) {
            game.score[scoreBox] = YatzyEngine.calculateScore(game.diceValues, scoreBox);
            upperSectionScore += game.score[scoreBox];
        }

        game.score.total = upperSectionScore;

        if (upperSectionScore >= 63) {
            game.score.bonus = 35;
            game.score.total += 35;
        }
    }
}

// Test the YatzyEngine class
let testGame = new YatzyGame();
testGame.diceValues = [1, 2, 3, 4, 5];
console.log('Initial dice values:', testGame.diceValues);
YatzyEngine.updateOverallScore(testGame);
console.log('Score after update:', testGame.score);
