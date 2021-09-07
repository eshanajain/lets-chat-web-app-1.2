//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
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
  
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");

function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
