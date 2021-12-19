
var firebaseConfig = {
      apiKey: "AIzaSyCDKdXPd11jru_Qp5corDcw2p3d_cv_Bgc",
      authDomain: "kwitter-e19d6.firebaseapp.com",
      databaseURL: "https://kwitter-e19d6-default-rtdb.firebaseio.com",
      projectId: "kwitter-e19d6",
      storageBucket: "kwitter-e19d6.appspot.com",
      messagingSenderId: "710929140176",
      appId: "1:710929140176:web:271e6e1aa079504dde51d5"
    };
    firebase. initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
