<?php
namespace Yatzy;

class YatzyGame {
    public $rollNumber;
    public $diceValues;
    public $keepDice;

    public function __construct() {
        $this->rollNumber = 0;
        $this->diceValues = array_fill(0, 5, 0);
        $this->keepDice = array_fill(0, 5, false);
    }

    public function rollDice() {
        $dice = new Dice();
        for ($i = 0; $i < 5; $i++) {
            if (!$this->keepDice[$i]) {
                $this->diceValues[$i] = $dice->roll();
            }
        }
        $this->rollNumber++;
    }
}
