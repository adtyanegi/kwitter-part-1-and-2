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
  function addUser() {
  
    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }