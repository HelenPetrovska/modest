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
let subscribeBtn = document.querySelector(".subscribe-btn");

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal(e) {
    e.preventDefault();
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal(e);
    }
})

function showModalByScroll() {
    if(window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll);
    }
}
window.addEventListener("scroll", showModalByScroll);

subscribeBtn.addEventListener("click", closeModal);

// не работает
// window.addEventListener("scroll", showModalByScroll, {
//     once:true,
// })


// mobile-menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
})

