// send-form

let contactBtn = document.querySelector(".contact-btn");
let sendBtn = document.querySelector(".send-btn");
let sendForm = document.querySelector(".form__body");
let closeBtn = document.querySelector(".close-btn");

function showSendForm() {
    sendForm.style.display = "block";
    contactBtn.classList.add("on");
    contactBtn.style.display = "none";
}

function hideSendForm() {
    sendForm.style.display = "none";
    contactBtn.classList.remove("on");
    contactBtn.style.display = "block";
}

contactBtn.addEventListener("click", showSendForm);

sendBtn.addEventListener("click", hideSendForm);

closeBtn.addEventListener("click", hideSendForm);

// modal

let modal = document.querySelector(".modal");
let subscribeBtn = document.querySelector(".subscribe-btn");
let subscribeCloseBtn = document.querySelector(".subscribe-close-btn");

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

subscribeCloseBtn.addEventListener("click", closeModal);

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

