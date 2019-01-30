function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
   
    
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }

  gapi.load('auth2', function() {
auth2 = gapi.auth2.init({
client_id: "89672675826-ut68sal4k0dljj7ocn098slba69g053s.apps.googleusercontent.com",
fetch_basic_profile: false,
scope: 'profile'
});

auth2.signIn().then(function() {
console.log(auth2.currentUser.get().getId());
});