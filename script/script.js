function btnClicked(val){
    document.getElementById("output").value +=val
    
}

function clr(){
    document.getElementById("output").value= ""
}

function equalTo(){
    var expsn = document.getElementById("output").value 
    var result = eval(expsn)
    document.getElementById("output").value = result 
}