function k(){
    var aud= new Audio("Believer.mp3");
    aud.play();
    aud.loop=true;
    }
    k();
    var firebaseConfig = {
        apiKey: "AIzaSyATqAlRAmvynowBUagfi7ALE-WW75_VKbc",
        authDomain: "project-e22a3.firebaseapp.com",
        databaseURL: "https://project-e22a3-default-rtdb.firebaseio.com",
        projectId: "project-e22a3",
        storageBucket: "project-e22a3.appspot.com",
        messagingSenderId: "746465396850",
        appId: "1:746465396850:web:8469ec2748f34f94589aeb",
        measurementId: "G-R9QPJMKQ9G"
      };
      
      // Initialize Firebase
      var app = initializeApp(firebaseConfig);
      var l = document.getElementById("usernameholder");
      l.innerHTML= localStorage.getItem("usernsilsostfc.c");