// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLx-TjPZjP11OCMC2eDWJJFVl_9fzD8_4",
    authDomain: "kwitter-2-4309d.firebaseapp.com",
    databaseURL: "https://kwitter-2-4309d-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-4309d",
    storageBucket: "kwitter-2-4309d.appspot.com",
    messagingSenderId: "535393871086",
    appId: "1:535393871086:web:e93476ad990411bdb87fff"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


function adduser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name); 
    window.location = "kwitter_room.html";
}



