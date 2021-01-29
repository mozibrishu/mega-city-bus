function plusMinusButtonHandler(){
    
}




function getInput(id){
    return parseInt(document.getElementById(id).value);
}
function setInput(id,value){
    document.getElementById(id).value = value;
}

function getAmount(id){
    return parseInt(document.getElementById(id).innerText);
}
function setAmount(id,amount){
    document.getElementById(id).innerText = amount;
}