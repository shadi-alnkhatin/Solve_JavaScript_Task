let names = ["Shadi", "Ahmad", "John", "Lana"];
let scores = [85, 92, 88, 77];

function $(id) {
    return document.getElementById(id);
}

function addScore() {
    const name = $("name").value;
    const score = parseInt($("score").value);
    
    if (name !== "" && !isNaN(score) && score >= 0 && score <= 100) {
        names.push(name);
        scores.push(score);
        $("name").value = "";
        $("score").value = "";
    } else {
        alert("Please enter a valid name and score (0-100).");
    }
}

function displayResults() {
    let totalScore = 0;
    let highestScore = 0;
    let highestname = "";

    for (let i = 0; i < scores.length; i++) {
        totalScore += scores[i];
        if (scores[i] > highestScore) {
            highestScore = scores[i];
            highestname = names[i];
        }
    }

    const averageScore = (totalScore / scores.length).toFixed(2);

    $("results").innerHTML = `<p>Average Score: ${averageScore}</p><p>Highest Score: ${highestScore} (${highestScorer})</p>`;
}

function displayScores() {
    const scoresTable = $("scores_table");
    scoresTable.innerHTML = ""; 

    for (let i = 0; i < names.length; i++) {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const scoreCell = document.createElement("td");

        nameCell.textContent = names[i];
        scoreCell.textContent = scores[i];

        row.appendChild(nameCell);
        row.appendChild(scoreCell);
        scoresTable.appendChild(row);
    }
}

window.onload = function() {
    $("add_button").onclick = addScore;
    $("results_button").onclick = displayResults;
    $("scores_button").onclick = displayScores;
};
