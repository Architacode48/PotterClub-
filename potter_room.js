// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAiH1aKjaivL-xcXgbuU0S-EDFIT5UGJEE",
    authDomain: "potterclub-809cd.firebaseapp.com",
    databaseURL: "https://potterclub-809cd.firebaseio.com",
    projectId: "potterclub-809cd",
    storageBucket: "potterclub-809cd.appspot.com",
    messagingSenderId: "56345192998",
    appId: "1:56345192998:web:7b1543fab637e33a4a54e7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"addingRoomName"});
    localStorage.setItem("room_name",room_name);
    window.location="potter_chat.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("room name :"+Room_names);
console.log("room name: "+Room_names);
row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="potter_chat.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="potter.html";
}