const greeting = document.querySelector(".js-greeting"),
    period = greeting.querySelector(".period"),
    name = greeting.querySelector(".name"),
    greetingForm = document.querySelector(".greetingForm"),
    input = greetingForm.querySelector("input");

const USER_LS = "curruntUser";

const randomName = {
    0: "Sexy",
    1: "SuperStar",
    2: "Gorgeous",
    3: "Wonderful",
    4: "Friend",
    5: "RockStar",
    6: "Classy",
    7: "Pal",
    8: "Lovely",
    9: "Handsome",
    10: "RisingStar"
};

const random = Math.floor(Math.random() * 11);

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
    greetingForm.classList.remove("show");
    name.classList.add("show");
    name.innerText = `${text}.`;
}

function handleSubmit(event) {
    event.preventDefault();
    greeting.appendChild(name);
    currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
    loadName();
}

function changeName(event) {
    greeting.removeChild(name);
    greetingForm.classList.add("show");
    greetingForm.addEventListener("submit", handleSubmit);
}

function getPeriod() {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 3 && hour < 12) {
        period.innerText = "Good morning,";
    } else if (hour >= 12 && hour < 17) {
        period.innerText = "Good afternoon,";
    } else {
        period.innerText = "Good evening,";
    }
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null || currentUser === "") {
        name.innerText = `${randomName[`${random}`]}.`;
    } else {
        paintGreeting(currentUser);
    }
}

name.addEventListener("dblclick", changeName);
loadName();
getPeriod();