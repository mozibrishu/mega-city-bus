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
    if (numOfSeat < 0) numOfSeat = 0;

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


// Bonus Section: Booking Confirmation Information
function bookNowBtnHandler() {
    if (isInputOkay()) {
        document.getElementById("bookingForm").style.display = "none";
        document.getElementById("bookingConfirmation").style.display = "block";
        displayConfirmationInfo();
    }
}


// Input Checking
function isInputOkay() {
    let firstClassSeat = getNumOfSeat("firstClassInput");
    let economySeat = getNumOfSeat("economyInput");

    if (firstClassSeat == 0 && economySeat == 0) {
        document.getElementById("warningSeat").style.display = "block";
        return false;
    } else {
        document.getElementById("warningSeat").style.display = "none";
    }

    // warning for setting up Departure and Return Date
    if (getConfirmValue("departureDate") == '') {
        warningDate("Departure");
        return false;
    }
    else if (getConfirmValue("returnDate") == '') {
        warningDate("Return")
        return false;
    } else {
        document.getElementById("warningDate").style.display = "none";
    }
    return true;
}


function warningDate(type) {
    document.getElementById("warningDate").style.display = "block";
    document.getElementById("warningDate").innerText = "Please Select " + type + " Date";
}


// Setting Value in Confirmation Display
function displayConfirmationInfo() {
    setConfirmOutput("confirmFirstClass", getNumOfSeat("firstClassInput"));
    setConfirmOutput("confirmFirstClassCost", getNumOfSeat("firstClassInput") * 150);

    setConfirmOutput("confirmEconomy", getNumOfSeat("economyInput"));
    setConfirmOutput("confirmEconomyCost", getNumOfSeat("economyInput") * 100);

    setConfirmOutput("confirmSubTotal", getAmount("subTotal"));
    setConfirmOutput("confirmTax", getAmount("tax"));
    setConfirmOutput("confirmTotal", getAmount("total"));

    setConfirmOutput("confirmDeparture", getConfirmValue("departureDate"));
    setConfirmOutput("confirmReturn", getConfirmValue("returnDate"));

    // Default: Dhaka - Chittagong
    if (getConfirmValue("startFrom")) {
        setConfirmOutput("confirmFrom", getConfirmValue("startFrom"));
    } else {
        setConfirmOutput("confirmFrom", "Dhaka");
    }
    if (getConfirmValue("endTo")) {
        setConfirmOutput("confirmTo", getConfirmValue("endTo"));
    } else {
        setConfirmOutput("confirmTo", "Chittagong");
    }
}

function setConfirmOutput(id, value) {
    document.getElementById(id).innerText = value;
}
function getConfirmValue(id) {
    return document.getElementById(id).value;
}


// Move to New Booking Form
function newBookingHandler() {
    document.getElementById("bookingForm").style.display = "block";
    document.getElementById("bookingConfirmation").style.display = "none";

    setNumOfSeat("firstClassInput", 0);
    setNumOfSeat("economyInput", 0);
    updateCostAmount();

    setNewValue("startFrom", "");
    setNewValue("endTo", "");
    setNewValue("departureDate", "");
    setNewValue("returnDate", "");
}

function setNewValue(id, value) {
    document.getElementById(id).value = value;
}