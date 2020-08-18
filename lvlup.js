//HOME PAGE JS
//function to scroll the home page
function aboutScroll() {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
}

//event listener that links the #moreButton to the About Us page
document.getElementById("moreButton").onclick = function () {
    window.location = "about.html";
}

//event listener for all the buttons of a class linkToLineup that link to lineup page
var linkToLineupButtons = document.getElementsByClassName("linkToLineup");
for(var i = 0; i < linkToLineupButtons.length; i++) {
    linkToLineupButtons[i].addEventListener("click", function() {
        window.location = "lineup.html";
    })
}

//event listener for #communityButton that links to Community Page
document.getElementById("communityButton").onclick = function () {
    window.location = "community.html";
}

//navbar get background on scroll
//syntax understanding - udemy should work

//cut logo to remove the empty space