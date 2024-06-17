<?php
namespace Yatzy\Test;

use Yatzy\YatzyGame;
use Yatzy\YatzyEngine;
use PHPUnit\Framework\TestCase;

class YatzyEngineTest extends TestCase
{
    public function testScoreTurn()
    {
        $game = new YatzyGame();
        $game->diceValues = [1, 1, 1, 2, 3];
        $score = YatzyEngine::scoreTurn($game, 'ones');
        $this->assertEquals(3, $score);
    }
}
