function plusMinusButtonHandler(type, isIncrease) {
    let numOfSeat = getNumOfSeat(type + "Input");
    if (isIncrease) {
        numOfSeat = numOfSeat + 1;
    }
    else {
        if (numOfSeat > 0) {
            numOfSeat = numOfSeat - 1;
        }
    }

    // checking for Direct Negative Input
    if(numOfSeat<0) numOfSeat = 0;

    setNumOfSeat(type + "Input", numOfSeat);
    updateCostAmount();
}


function updateCostAmount() {
    let firstClassSeat = getNumOfSeat("firstClassInput");
    let economySeat = getNumOfSeat("economyInput");

    let subTotal = firstClassSeat * 150 + economySeat * 100;
    let tax = Math.round(subTotal / 10);
    let total = subTotal + tax;

    setAmount("subTotal", subTotal);
    setAmount("tax", tax);
    setAmount("total", total);
}


function getNumOfSeat(id) {
    return parseInt(document.getElementById(id).value);
}
function setNumOfSeat(id, value) {
    document.getElementById(id).value = value;
}

function getAmount(id) {
    return parseInt(document.getElementById(id).innerText);
}
function setAmount(id, amount) {
    document.getElementById(id).innerText = amount;
}


function bookNowBtnHandler(){
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("bookingConfirmation").style.display = "block";
}