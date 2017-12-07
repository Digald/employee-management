//unix timestamp firebase 

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAgXaYrzUuZ2szkP3yTZJ_bXxcRcCBY1XI",
    authDomain: "my-first-project-4106f.firebaseapp.com",
    databaseURL: "https://my-first-project-4106f.firebaseio.com",
    projectId: "my-first-project-4106f",
    storageBucket: "my-first-project-4106f.appspot.com",
    messagingSenderId: "1083550261976"
  };

  firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();

  // Capture Button Click
    $(".btn btn-primary").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

  var name = $("#employee-name").val().trim();
  var role = $("#employee-role").val().trim();
  var startDate = $("#start-date").val().trim();
  var monthlyRate = $("#monthly-rate").val().trim();

  database.ref().push({
    name: name,
    role: role,
    start: startDate,
    rate: monthlyRate
  });

});