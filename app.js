// send-form

let sendBtn = document.querySelector(".contact-btn");
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

// modal

let modal = document.querySelector(".modal");
let subscribeBtn =document.querySelector(".subscribe-btn");

window.addEventListener("scroll", function() {
    if((window.pageYOffset>(document.body.scrollHeight/2)) && (window.pageYOffset<(document.body.scrollHeight/3*2)) ) {
        modal.classList.add("show");
        modal.classList.remove("hide");
    }
})
subscribeBtn.addEventListener("click", function() {
    modal.classList.add("hide");
    modal.classList.remove("show");
})

console.log(document.body.scrollHeight/3*2)
console.log(window.pageYOffset)
console.log(modal)


