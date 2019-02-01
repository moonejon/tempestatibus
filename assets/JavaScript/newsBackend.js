
    var x = "politics";
    var results = [];
    var num_results = 10;
$(document).ready(function () {
    var queryURL =
        "https://api.nytimes.com/svc/topstories/v2/" + x + ".json?api-key=LLANXrG01LGahaCmowIvO1Ves1rF2cae";
   
    
    
    $.ajax({
        url: queryURL ,
        success: function (politics) {
            console.log(politics);
            for (k = 0; k <= 5; k++) {
                var politicsDiv = document.getElementById('politics-news');
                var politicsStoryDiv = document.createElement('div');
                politicsStoryDiv.setAttribute("class", "headlines");
                politicsStoryDiv.innerHTML = "<a href='" + politics.results[k].url + "'>" + politics.results[k].title + "</a>";
                var horizontalLine = document.createElement("hr");
                horizontalLine.setAttribute("class", "uk-divider-small");
                politicsStoryDiv.appendChild(horizontalLine);
                politicsDiv.appendChild(politicsStoryDiv);
            }

        }
    });
});



var y = "sports";
var results = [];
var num_results = 10;
$(document).ready(function () {
    var queryURL =
        "https://api.nytimes.com/svc/topstories/v2/" + y + ".json?api-key=LLANXrG01LGahaCmowIvO1Ves1rF2cae";



    $.ajax({
        url: queryURL,
        success: function (sports) {
            console.log(sports);
            for (k = 0; k <= 5; k++) {
                var sportsDiv = document.getElementById('sports-news');
                var sportsStoryDiv = document.createElement('div');
                sportsStoryDiv.setAttribute("class", "headlines");
                sportsStoryDiv.innerHTML = "<a href='" + sports.results[k].url + "'>" + sports.results[k].title + "</a>";
                var horizontalLine = document.createElement("hr");
                horizontalLine.setAttribute("class", "uk-divider-small");
                sportsStoryDiv.appendChild(horizontalLine);
                sportsDiv.appendChild(sportsStoryDiv);
            }
        }
    });
});
