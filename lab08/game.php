<?php
session_start();

class YatzyGame {
    public $leaderboard = [];

    public function __construct() {
        // Initialize leaderboard from session if exists
        if (isset($_SESSION['leaderboard'])) {
            $this->leaderboard = $_SESSION['leaderboard'];
        }
    }

    public function addScore($playerName, $score) {
        $this->leaderboard[] = ['name' => $playerName, 'score' => $score];
        usort($this->leaderboard, function($a, $b) {
            return $b['score'] - $a['score'];
        });
        $_SESSION['leaderboard'] = $this->leaderboard;
    }

    public function getLeaderboard() {
        return $this->leaderboard;
    }
}

// Example usage
$game = new YatzyGame();
$game->addScore('Alice', 250);
$game->addScore('Bob', 300);
print_r($game->getLeaderboard());
?>
