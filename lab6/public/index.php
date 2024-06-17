<?php
require_once('_config.php');

use Yatzy\Dice;
use Yatzy\YatzyGame;

$d = new Dice();
echo "Dice roll test:<br>";
for ($i = 1; $i <= 5; $i++) {
    echo "ROLL {$i}: {$d->roll()}<br>";
}

echo "<br>YatzyGame test:<br>";
$game = new YatzyGame();
$game->rollDice();
print_r($game->diceValues);
echo "<br>";

$game->keepDice[0] = true;
$game->keepDice[1] = true;

$game->rollDice();
print_r($game->diceValues);
echo "<br>";
