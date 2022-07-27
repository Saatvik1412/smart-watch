 setCurrentTime = () => {
    const d = new Date();
    var min=d.getMinutes().toString();
    if(min<10)
        min="0"+min;
    let time = (d.getHours()).toString() + " : " + min;
    document.getElementById("time").innerText = time;
}

setCurrentDate = () => {
    const d = new Date();
    var m=d.getMonth()+1;
    m=m.toString();
    var m1="ye";

         if(m=="1")
             m1="Jan";

         else if(m=="2")
             m1="Feb";
         else if(m=="3")
             m1="March";
         else if(m=="4")
             m1="April";
         else if(m=="5")
             m1="May";
         else if(m=="6")
             m1="June";
         else if(m=="7")
            m1="July";
         else if(m=="8")
             m1="Aug";
         else if(m=="9")
             m1="Sept";
         else if(m=="10")
             m1="Oct";
         else if(m=="11")
             m1="Nov";
         else if(m=="12")
             m1="Dec";
             
    let date = (d.getDate()).toString()+" "+m1+" " + (d.getFullYear().toString())
    document.getElementById("date").innerText = date;
}

setCurrentDate()
setInterval(function () {setCurrentTime()}, 1000)


var colorChanger = document.getElementById("time");

const randNum = () => Math.floor(Math.random()*256);

function changeColor(){
  colorChanger.style.color =  `rgb(${randNum()},${randNum()},${randNum()})`;
}

var myTimer = setInterval(changeColor, 1000);
var running = true;

colorChanger.onclick = function(){

  if(running) {
    clearInterval(myTimer);
    colorChanger.innerHTML = "Timer stopped";
    running = false;
  } else {
    myTimer = setInterval(changeColor, 3000);
    colorChanger.innerHTML = "";
    running = true;
  }
 
};
