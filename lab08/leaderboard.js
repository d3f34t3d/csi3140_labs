document.addEventListener("DOMContentLoaded", function() {
    fetch('leaderboard.php')
        .then(response => response.json())
        .then(data => {
            const leaderboardTable = document.getElementById('leaderboard-table').getElementsByTagName('tbody')[0];

            if (data.length === 0) {
                let row = leaderboardTable.insertRow();
                let cell = row.insertCell(0);
                cell.colSpan = 3;
                cell.textContent = "No scores yet!";
                cell.style.textAlign = 'center';
            } else {
                data.forEach((entry, index) => {
                    let row = leaderboardTable.insertRow();
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    cell1.textContent = index + 1;
                    cell2.textContent = entry.name;
                    cell3.textContent = entry.score;
                });
            }
        })
        .catch(error => console.error('Error fetching leaderboard:', error));
});
