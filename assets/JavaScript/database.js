// Initialize Firebase
var config = {
  apiKey: "AIzaSyA37zrxbnvySZHEoRmqK7SxyO4xMQ2UM5Y",
  authDomain: "tempestatibus-1548211855661.firebaseapp.com",
  databaseURL: "https://tempestatibus-1548211855661.firebaseio.com",
  projectId: "tempestatibus-1548211855661",
  storageBucket: "tempestatibus-1548211855661.appspot.com",
  messagingSenderId: "261952237475"
};
firebase.initializeApp(config);

  var email;
  var username;
  var password;



  var database = firebase.databse();

$("#signup").on("click", function() {
        event.preventDefault();
        email = $("#email").val().trim();
        password = $("#password").val().trim();
        username=$("#username").val().trim();

        // Pushing to database
        database.ref().push({
            username: username,
            email:email,
            password:password  
                
          });
         $("form")[0].reset(); 
      });
   
   
      database.ref().on("value", function(snapshot) {
      // Change the HTML to reflect
      $("#email").html(snapshot.val().email);
      $("#password").html(snapshot.val().password);
      $("#username").html(snapshot.val().username);
  
});