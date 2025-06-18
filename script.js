var start;
document.getElementById("start").onclick= function(){
  start = new Date().getTime();
  document.getElementById("left").style.display = "none";
  document.getElementById("right").style.display = "none";
  document.getElementById("start").style.display = "none";


  var playarea = document.getElementById("playarea");
  playarea.style.backgroundImage = "none";

  var Aheart = document.getElementById("Aheart");
  Aheart.style.backgroundColor = "#7B4019";
  Aheart.style.marginLeft="10%";
  Aheart.classList.add("my-style");
  Aheart.style.cursor="pointer";

  var Bheart = document.getElementById("Bheart");
  Bheart.style.backgroundColor = "#725CAD";
  Bheart.style.marginLeft="40%";
  Bheart.classList.add("my-style");
  Bheart.style.cursor="pointer"; 

  var Cheart = document.getElementById("Cheart");
  Cheart.style.backgroundColor = "#D50B8B";
  Cheart.style.marginLeft="70%";
  Cheart.classList.add("my-style");
  Cheart.style.cursor="pointer";

  var hearts = document.getElementsByClassName("hearts");
  for (var i = 0; i < hearts.length; i++) {
    hearts[i].onclick = function() {
      this.style.display = "none";
    };
  }


  var Aballoon = document.getElementById("Aballoon");
  Aballoon.style.backgroundColor="#393E46";
  Aballoon.style.marginLeft="25%";
  Aballoon.style.cursor="pointer";

  var Bballoon = document.getElementById("Bballoon");
  Bballoon.style.backgroundColor="#3F7D58";
  Bballoon.style.marginLeft="55%";
  Bballoon.style.cursor="pointer";

  var Cballoon = document.getElementById("Cballoon");
  Cballoon.style.backgroundColor="#27548A";
  Cballoon.style.marginLeft="85%";
  Cballoon.style.cursor="pointer";

  var balloons = document.getElementsByClassName("balloons");
    for (var i = 0; i < balloons.length; i++) {
      balloons[i].onclick = function() {
      this.style.display = "none";
    }
  }
}

document.getElementById("endGame").onclick = function(){
  var end = new Date().getTime();
  var timeTaken = (end - start)/1000;
  var username = document.getElementById("username").value;
  alert("Congratulations "+ username + " !! \n" +"You have completed game in just " + timeTaken + " sec");
}

document.getElementById("instructions").onclick=function(){
  alert("Welcome to the game !! \n" + "1.Enter your name in the text area.\n" + "2.Click Start to begin the game.\n" + "3.Click on all the balloons and hearts.\n" + "Reminder: \n" + "Timer-Start: Only when you click on the start.\n" + "Timer-Stops: Only when you click on the end.\n"+"Click End Game: Only when you pop all the hearts and balloons\n" + "Have a Fun...Thank you😊");
}





