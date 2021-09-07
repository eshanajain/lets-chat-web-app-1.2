 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKgb0qcJ6P31tawCa4m6yIepbItgZIgjY",
  authDomain: "lets-chat-web-app-6a0aa.firebaseapp.com",
  projectId: "lets-chat-web-app-6a0aa",
  storageBucket: "lets-chat-web-app-6a0aa.appspot.com",
  messagingSenderId: "984044911725",
  appId: "1:984044911725:web:5efa9263e5381015b55364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_namee").innerHTML = "welcome" + user_name;

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "kwitter_page.html";

  
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" +Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
 
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

