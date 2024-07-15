<?php
session_start();

class LeaderboardAPI {
    public function getLeaderboard() {
        if (isset($_SESSION['leaderboard'])) {
            return $_SESSION['leaderboard'];
        } else {
            return [];
        }
    }
}

header('Content-Type: application/json');
$api = new LeaderboardAPI();
echo json_encode($api->getLeaderboard());
?>
