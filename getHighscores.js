const highscoreTable = document.getElementById("highscoresTable");

const getPlayers = async () => {
  try {
    const response = await fetch(
      "http://remindot.hopto.org:64354/remind-ot/highscore/player?by=EXP"
    );
    const players = await response.json();
    return players;
  } catch (e) {
    console.error(e);
  }
};

getPlayers().then((players) => {
  if (players && players.length) {
    players.forEach((player, index) => {
      const tableRow = document.createElement("tr");
      const playerRankTd = document.createElement("td");
      const playerNameTd = document.createElement("td");
      const levelTd = document.createElement("td");

      playerRankTd.innerText = index += 1;
      playerNameTd.innerText = player.playerName;
      levelTd.innerText = player.level;
	  
	  if (player.isOnline) {
		  const onlineSpan = document.createElement('span');
		  onlineSpan.setAttribute('class', 'is-online');
		  playerNameTd.innerText = playerNameTd.innerText + " ";
		  playerNameTd.appendChild(onlineSpan);
	  }

      tableRow.appendChild(playerRankTd);
      tableRow.appendChild(playerNameTd);
      tableRow.appendChild(levelTd);
      highscoreTable.appendChild(tableRow);
    });
  } else {
    const error = document.createElement("p");
    error.style.color = "red";
    error.innerText = "Something went wrong when trying to load highscores";
    highscoreTable.appendChild(error);
  }
});