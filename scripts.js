function paymentStatus() {
    if (document.body.innerText.includes("have been sent")) {
        return "success";
    } else if (document.body.innerText.toLowerCase().includes("try again")) {
        return "failure";
    } else {
        return "waiting";
    }
}

function getDonationAmount() {
    var activeElement = document.getElementsByClassName("active")[0].querySelectorAll(".tip-amount,.icon-button-label")[0];
    if (activeElement) {
        return activeElement.innerText;
    } else {
        return "invalid";
    }
}

function paymentSuccessPostURL() {
    return "https://t9orz85l31.execute-api.eu-west-1.amazonaws.com/default/donations-ukraine-function";
}
