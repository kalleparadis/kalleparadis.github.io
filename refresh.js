var url = document.location.href;
hasBeenRefreshed = url.includes("nocache")

time = new Date().getTime();

if (!hasBeenRefreshed) {
    var newUrl = new URL(url);
    newUrl.searchParams.set('nocache', time);
	window.location.replace(newUrl.toString());
}

const onlineScript = document.createElement("script");
onlineScript.setAttribute("src", "getOnline.js?nocache=" + time);
document.head.appendChild(onlineScript);

const highscoresScript = document.createElement("script");
highscoresScript.setAttribute("src", "getHighscores.js?nocache=" + time);
document.head.appendChild(highscoresScript);

const guildsScript = document.createElement("script");
guildsScript.setAttribute("src", "getGuilds.js?nocache=" + time);
document.head.appendChild(guildsScript);