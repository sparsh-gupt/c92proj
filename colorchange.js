var div = document.getElementById("word");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
       // console.log(Math.floor(Math.random() * 16));
    }
    return color;
}

function changeColor(){
  div.style.backgroundColor= getRandomColor();
}

setInterval(changeColor,1000);