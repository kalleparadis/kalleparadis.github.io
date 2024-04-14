const playersOnlineTable = document.getElementById("playersOnlineTable");

const getOnline = async () => {
  try {
    const response = await fetch(
      "http://remindot.hopto.org:64354/remind-ot/online"
    );
    const online = await response.json();
    return online;
  } catch (e) {
    console.error(e);
  }
};

getOnline().then((online) => {
  if (online) {
	  if (online.nbrOfPlayersOnline >= 5) {
		const tableRow = document.createElement("tr");
		const playersOnlineTd = document.createElement("td");
		playersOnlineTd.innerText = online.nbrOfPlayersOnline + " players online";
		playersOnlineTd.style.color = "#00e600";
		tableRow.appendChild(playersOnlineTd);
		playersOnlineTable.appendChild(tableRow);
	  }
    }
});