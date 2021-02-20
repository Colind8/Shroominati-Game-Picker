function reroll() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);

            var rand = Math.floor(Math.random() * myObj.games.length);
            var systemshock = Math.floor(Math.random() * 500);

            if (systemshock == 1) {
                document.getElementById("link").innerHTML = "System Shock: Enhanced Edition";
                document.getElementById("desc").innerHTML = "Re-discover what made System Shock the first of it's kind, a ground breaking immersive sim that would inspire a generation of games to come";
                document.getElementById("link").setAttribute("href","https://store.steampowered.com/app/410710/System_Shock_Enhanced_Edition/");
                document.getElementById("reroll").innerHTML = "It's not even multiplayer";
            } else {
                document.getElementById("link").innerHTML = myObj.games[rand].name;
                document.getElementById("desc").innerHTML = myObj.games[rand].desc;
                document.getElementById("link").setAttribute("href",myObj.games[rand].link);
                document.getElementById("reroll").innerHTML = myObj.games[rand].reroll;
            }

            
        }
    };
    xmlhttp.open("GET", "games.json", true);
    xmlhttp.send();

}