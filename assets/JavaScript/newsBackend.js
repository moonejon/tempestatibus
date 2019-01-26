
var folitics = function(){
    var x = "politics";
    var results = [];
    var num_results = 10;
    $(document).ready(function(){
     var queryURL =
      "https://api.nytimes.com/svc/topstories/v2/"+x+".json?api-key=LLANXrG01LGahaCmowIvO1Ves1rF2cae";

  queryURL +=
      "&" +
      $.param({
       "api-key": "LLANXrG01LGahaCmowIvO1Ves1rF2cae",
       //  "results": [5]
      });

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

     var filteredRecs = response.results;
     
    for(var k = 0; k < 5; k++){
        
     console.log(filteredRecs[k].title);
     
      
     } 
    console.log(filteredRecs); 
 }).then(function(response){
     var x= "sports";
     var queryURL = "https://api.nytimes.com/svc/topstories/v2/"+x+".json?api-key=LLANXrG01LGahaCmowIvO1Ves1rF2cae";

queryURL +=
 "&" +
 $.param({
  "api-key": "LLANXrG01LGahaCmowIvO1Ves1rF2cae",
  //  "results": [5]
 });

 $.ajax({
     url: queryURL,
     method:"GET"

 }).then(function(respoonse){

     var filteredRecs = respoonse.results;

     for(var k=0;k<5;k++){
         console.log(filteredRecs[k].title);

      
     }

 console.log(filteredRecs); 

 })
});

    });
}


var fports = function(){
    var x = "sports";
    var results = [];
    var num_results = 10;
    $(document).ready(function(){
     var queryURL =
      "https://api.nytimes.com/svc/topstories/v2/"+x+".json?api-key=LLANXrG01LGahaCmowIvO1Ves1rF2cae";

  queryURL +=
      "&" +
      $.param({
       "api-key": "LLANXrG01LGahaCmowIvO1Ves1rF2cae",
       //  "results": [5]
      });

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

     var filteredRecs = response.results;
     
    for(var k = 0; k < 5; k++){
        
     console.log(filteredRecs[k].title);
     
      
     } 
    console.log(filteredRecs); 
 }).then(function(response){
     var x= "sports";
     var queryURL = "https://api.nytimes.com/svc/topstories/v2/"+x+".json?api-key=LLANXrG01LGahaCmowIvO1Ves1rF2cae";

queryURL +=
 "&" +
 $.param({
  "api-key": "LLANXrG01LGahaCmowIvO1Ves1rF2cae",
  //  "results": [5]
 });

 $.ajax({
     url: queryURL,
     method:"GET"

 }).then(function(respoonse){

     var filteredRecs = respoonse.results;

     for(var k=0;k<5;k++){
         console.log(filteredRecs[k].title);

      
     }

 console.log(filteredRecs); 

 })
});

    });
}

var fntertainment = function(){
    var x = "insider";
    var results = [];
    var num_results = 10;
    $(document).ready(function(){
     var queryURL =
      "https://api.nytimes.com/svc/topstories/v2/"+x+".json?api-key=LLANXrG01LGahaCmowIvO1Ves1rF2cae";

  queryURL +=
      "&" +
      $.param({
       "api-key": "LLANXrG01LGahaCmowIvO1Ves1rF2cae",
       //  "results": [5]
      });

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

     var filteredRecs = response.results;
     
    for(var k = 0; k < 5; k++){
        
     console.log(filteredRecs[k].title);
     
      
     } 
    console.log(filteredRecs); 
 }).then(function(response){
     var x= "sports";
     var queryURL = "https://api.nytimes.com/svc/topstories/v2/"+x+".json?api-key=LLANXrG01LGahaCmowIvO1Ves1rF2cae";

queryURL +=
 "&" +
 $.param({
  "api-key": "LLANXrG01LGahaCmowIvO1Ves1rF2cae",
  //  "results": [5]
 });

 $.ajax({
     url: queryURL,
     method:"GET"

 }).then(function(respoonse){

     var filteredRecs = respoonse.results;

     for(var k=0;k<5;k++){
         console.log(filteredRecs[k].title);

      
     }

 console.log(filteredRecs); 

 })
});

    });
}

var tech = function(){

    var x = "technology";
    var results = [];
    var num_results = 10;
    $(document).ready(function(){
     var queryURL =
      "https://api.nytimes.com/svc/topstories/v2/"+x+".json?api-key=LLANXrG01LGahaCmowIvO1Ves1rF2cae";

  queryURL +=
      "&" +
      $.param({
       "api-key": "LLANXrG01LGahaCmowIvO1Ves1rF2cae",
       //  "results": [5]
      });

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

     var filteredRecs = response.results;
     
    for(var k = 0; k < 5; k++){
        
     console.log(filteredRecs[k].title);
     
      
     } 
    console.log(filteredRecs); 
 }).then(function(response){
     var x= "sports";
     var queryURL = "https://api.nytimes.com/svc/topstories/v2/"+x+".json?api-key=LLANXrG01LGahaCmowIvO1Ves1rF2cae";

queryURL +=
 "&" +
 $.param({
  "api-key": "LLANXrG01LGahaCmowIvO1Ves1rF2cae",
  //  "results": [5]
 });

 $.ajax({
     url: queryURL,
     method:"GET"

 }).then(function(respoonse){

     var filteredRecs = respoonse.results;

     for(var k=0;k<5;k++){
         console.log(filteredRecs[k].title);

      
     }

 console.log(filteredRecs); 

 })
});

    });
}

