var latitude;
var longitude;

var searchBox = new google.maps.places.SearchBox(document.querySelector("#city-search"));

$(document).ready(getLocation);

    function getLocation() {
    if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    function geoSuccess(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log("lat:" + latitude + " lng:" + longitude);
    codeLatLng(latitude, longitude);
    }

    function geoError() {
    console.log("Geocoder failed.");
}

    var geocoder;
    function initialize() {
    geocoder = new google.maps.Geocoder();
}

function codeLatLng(lat, lng) {
    initialize();
    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if(status == google.maps.GeocoderStatus.OK) {
          console.log(results)
          if(results[1]) {
              //formatted address
              var address = results[0].formatted_address;
              getDarkSkyData(lat, lng, address);
              console.log("address = " + address);
          } else {
              console.log("No results found");
          }
      } else {
          console.log("Geocoder failed due to: " + status);
      }
    });
}





searchBox.addListener('places_changed', function(){
    
    var locale = searchBox.getPlaces()[0];

    console.log(locale);
    latitude = locale.geometry.location.lat();
    longitude = locale.geometry.location.lng();
    address = locale.formatted_address;
    console.log("Latitude : " + latitude);
    console.log("longitude :" + longitude);
    getDarkSkyData(latitude, longitude, address);
    });



    function getDarkSkyData(latitude, longitude, locale){

    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var apiLinkDS = 'https://api.darksky.net/forecast/36dca47fc87009c040d8667dfb22db85/' + latitude + ',' + longitude;


    // Call to the DarkSky API to retrieve JSON

    $.getJSON({
        url: proxy + apiLinkDS,
        success: function (forecast) {
            console.log(forecast);
            var days = [
                'Sun',
                'Mon',
                'Tues',
                'Wed',
                'Thur',
                'Fri',
                'Sat'
            ];

            //Current Day Forcast


            $("#location-current").text(locale);
    
            var currDate = new Date(forecast.currently.time * 1000);

            var currDay = days[currDate.getDay()]

            console.log("--------Current forcast---------" + currDay)


            var currSkicons = forecast.currently.icon;
            console.log("icons :" + currSkicons);
            
            var skycons = new Skycons();

            skycons.add("currImg", currSkicons);

            skycons.play();


            var currSummary = forecast.currently.summary;
            console.log("Summary :" + currSummary);

            var currTemp = Math.round(forecast.currently.temperature);
            console.log("Temperature :" + currTemp);

            $("#currTemp").text(currTemp + " " + "F");
            $("#weather-wordy-status").text(currSummary);


            //Today Forecast

            var date = new Date(forecast.daily.data[0].time * 1000);

            var day = days[date.getDay()]
            var tempCurrMax = Math.round(forecast.daily.data[0].temperatureMax);
            console.log("Max temp :" + tempCurrMax);

            $("#maxCurrTemp").text(tempCurrMax + " " + "F");

            var tempCurrMin = Math.round(forecast.daily.data[0].temperatureLow)
            console.log("Min temp :" + tempCurrMin);
            $("#minCurrTemp").text(tempCurrMin + " " + "F");
            var currPrec = Math.round((forecast.daily.data[0].precipProbability) * 100)
            $("#currPrec").text(currPrec + " " + "%");
            var currWindSpeed = Math.round(forecast.daily.data[0].windSpeed);
            $("#currWindSpeed").text(currWindSpeed + " " + "MPH");


            //Seven day Forecast

            for (var i = 1; i < 7; i++) {

                var date = new Date(forecast.daily.data[i].time * 1000);

                var day= days[date.getDay()];
                
                console.log("----7 day forecast start with current day----" + day);

                console.log(day);
                //console.log(date);

                var skicons = forecast.daily.data[i].icon;
                console.log(skicons);
                // var time = forecast.daily.data[i].time;
                // console.log(time);
                //var summary = forecast.daily.data[i].summary;
                //console.log(summary);
                //var temp = Math.round(forecast.hourly.data[i].temperature);
                //console.log(temp);
                var tempMax = Math.round(forecast.daily.data[i].temperatureMax);
                console.log("Max temp :" + tempMax);
                var tempLow = Math.round(forecast.daily.data[i].temperatureLow)
                console.log("Min temp :" + tempLow);

                
                    $("#maxMin"+i).html(tempMax + "&deg;" + " / " + tempLow + "&deg;");
                    $("#day"+i).text(day);

                

            }


        }
});


    };