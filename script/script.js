// Created by Joel Lijo Mathew
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
}

function clr() {
  document.getElementById("output").value = "";
}

function equalTo() {
  var expsn = document.getElementById("output").value;
  if (expsn == "") {
    return;
  }
  var result = eval(expsn);
  document.getElementById("output").value = result;
}
