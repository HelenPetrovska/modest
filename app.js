let sendBtn = document.querySelector(".send-btn");
let sendForm = document.querySelector(".contact-form");
sendBtn.classList.add("off");

function showSendForm () {
    sendForm.style.opacity = "1";
    sendBtn.classList.add("on");
    sendBtn.classList.remove("off");
}

function hideSendForm () {
    sendForm.style.opacity = "0";
    sendBtn.classList.add("off");
    sendBtn.classList.remove("on");
}

sendBtn.addEventListener("click", function() {
    if (sendBtn.classList.contains("off")) {
        showSendForm();
    } else hideSendForm();
})
