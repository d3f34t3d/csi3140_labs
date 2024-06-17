<?php
namespace Yatzy;

class YatzyEngine {
    public static function scoreTurn($game, $scoreBox) {
        $score = 0;
        switch ($scoreBox) {
            case 'ones':
                $score = array_sum(array_filter($game->diceValues, fn($val) => $val === 1));
                break;
            // Implement other score boxes
        }
        return $score;
    }

    public static function updateOverallScore($game) {
        // Implement score calculation
        // $game->score = total score;
        // $game->bonus = bonus calculation;
    }
}
