var firebaseConfig = {
      apiKey: "AIzaSyDXOOlksn9_aALZfEr9qokjpRr3_X3lqU0",
      authDomain: "kwitter-7741f.firebaseapp.com",
      databaseURL: "https://kwitter-7741f-default-rtdb.firebaseio.com",
      projectId: "kwitter-7741f",
      storageBucket: "kwitter-7741f.appspot.com",
      messagingSenderId: "746449598382",
      appId: "1:746449598382:web:24bbbed7a68a07188bfa3f",
      measurementId: "G-2GE8WSLYGB"
    };
    

firebase.initializeApp(firebaseConfig);

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

function getData() { firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
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

function logout()
 {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}