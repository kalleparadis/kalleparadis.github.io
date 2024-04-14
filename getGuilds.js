const guildsTable = document.getElementById("guildsTable");

const getGuilds = async () => {
  try {
    const response = await fetch(
      "http://remindot.hopto.org:64354/remind-ot/highscore/guild?by=AVG_LEVEL"
    );
    const guilds = await response.json();
    return guilds;
  } catch (e) {
    console.error(e);
  }
};

getGuilds().then((guilds) => {
  if (guilds && guilds.length) {
    guilds.forEach((guild, index) => {
      const tableRow = document.createElement("tr");
      const guildRankTd = document.createElement("td");
      const guildNameTd = document.createElement("td");
      const leaderTd = document.createElement("td");
	  const nbrOfMembersTd = document.createElement("td");

      guildRankTd.innerText = index += 1;
      guildNameTd.innerText = guild.guildName;
      leaderTd.innerText = guild.leader;
	  nbrOfMembersTd.innerText = guild.nbrOfMembers;

      tableRow.appendChild(guildRankTd);
      tableRow.appendChild(guildNameTd);
      tableRow.appendChild(leaderTd);
	  tableRow.appendChild(nbrOfMembersTd);
      guildsTable.appendChild(tableRow);
    });
  } else {
    const error = document.createElement("p");
    error.style.color = "red";
    error.innerText = "Something went wrong when trying to load guilds";
    guildsTable.appendChild(error);
  }
});