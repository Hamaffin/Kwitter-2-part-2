//Firebase Console
const firebaseConfig = {
      apiKey: "AIzaSyACeZE9OksH5QP44B1WESeBuZWkYWblBhI",
      authDomain: "kwitter-dd30b.firebaseapp.com",
      projectId: "kwitter-dd30b",
      storageBucket: "kwitter-dd30b.appspot.com",
      messagingSenderId: "614665516456",
      appId: "1:614665516456:web:3c26b1b70857a3ad19599d"
    };

    user = localStorage.getItem("user_name").innerHTML = "User: " + user;

    document.getElementById("user").innerHTML = "User: " + user;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){

      window.location = "index.html";

}


