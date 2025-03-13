// Created by Joel Lijo Mathew

window.addEventListener("keydown", function (event) {
  event.preventDefault();
  if (
    event.key == "/" ||
    event.key == "*" ||
    event.key == "+" ||
    event.key == "-"
  ) {
    playAudio();

    document.getElementById("output").value += " " + event.key + " ";
  } else {
    if (event.key == "Enter") {
      
      equalTo();
    } else {
      if (event.key == "Backspace" || event.key == "Delete") {
        
        del();
      } else {
        if (event.key == " ") {
          clr();
        } else {
          if (
            (event.key >= "0" && event.key <= "9") ||
            event.key == ")" ||
            event.key == "("
          ){
            playAudio();
          document.getElementById("output").value += event.key;
          }
          else{
            return;
          }
        }
      }
    }
  }
});

function btnClicked(val) {
  if (val == "/" || val == "*" || val == "+" || val == "-") {
    document.getElementById("output").value += " " + val + " ";
  } else {
    document.getElementById("output").value += val;
  }
}

function del() {
  var string = document.getElementById("output").value;
  document.getElementById("output").value = string.substr(0, string.length - 1);
  playAudio();
}

function clr() {
  playAudio();
  document.getElementById("output").value = "";
}

function equalTo() {
  playAudio();
  var expsn = document.getElementById("output").value;
  if (expsn == "") {
    return;
  }
  var result = eval(expsn);
  document.getElementById("output").value = result;
}
