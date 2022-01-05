 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAuBiYBrMQRPDYpvysiviEB-8Fc4ZfDlEU",
  authDomain: "classtest-d6bb1.firebaseapp.com",
  databaseURL: "https://classtest-d6bb1.firebaseio.com",
  projectId: "classtest-d6bb1",
  storageBucket: "classtest-d6bb1.appspot.com",
  messagingSenderId: "273693321168",
  appId: "1:273693321168:web:c6534708e494b23179bbd5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    //ADD YOUR FIREBASE LINKS
    
      user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "kwitter(1).html";
    }