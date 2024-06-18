let L4_1 = document.querySelector("#L4_1");
let L4_2 = document.querySelector("#L4_2");
let L4_3 = document.querySelector("#L4_3");
let L4_4 = document.querySelector("#L4_4");
let L4_5 = document.querySelector("#L4_5");

//Opgave 1
const first = document.getElementById("first");
const last =  document.getElementById("last");
const nameBtn = document.getElementById("name-btn");

let firstName;
let lastName;

first.addEventListener("change", () => {
    firstName = first.value;
    console.log(firstName);
});

last.addEventListener("change", () => {
    lastName = last.value;
    console.log(lastName);
})

nameBtn.addEventListener("click", () => {
    const fullName = document.createElement("p");
    fullName.innerText = `Your Fullname: ${firstName} ${lastName}`;
    L4_1.appendChild(fullName);
});

//Opgave 2
function logMessage() {
    console.log("Hello after dealy");
    const delayedMessage = document.createElement("p");
    delayedMessage.innerHTML = "Message after delay";
    L4_2.appendChild(delayedMessage);
}

function delayFunction(func, delay) {
    setTimeout(func, delay);
}

delayFunction(logMessage, 3000);

//Opgave 3
let time = 0;
let stopWatchElement = document.createElement("h2");
function stopWatch() {
    let i = setInterval(() => {
        time++;
        if (time <= 1) {
            stopWatchElement.innerHTML = `${time} sekund er gået`;
        L4_3.appendChild(stopWatchElement);
        }
        else {
            stopWatchElement.innerHTML = `${time} sekunder er gået`;
            L4_3.appendChild(stopWatchElement);
        }

        if (time === 60) {
            clearInterval(i);
            stopWatchElement.innerHTML = `${time} sekunder er gået. Nu er der gået et minut`;
            L4_3.appendChild(stopWatchElement);
        }
    }, 1000)
}

stopWatch();

//Opgave 4
function checkScrollLength() {
    let scrollMessage = document.createElement("p");
    L4_4.appendChild(scrollMessage);
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        // console.log(scrollTop);
        let docHeight = document.body.offsetHeight;
        // console.log(docHeight);
        let winHeight = window.innerHeight;
        // console.log(winHeight);

        let scrollPercent = scrollTop / (docHeight - winHeight);
        let roundedScrollPercent = Math.round(scrollPercent * 100);
        scrollMessage.innerHTML = `You have scrolled ${roundedScrollPercent}%`;
        // console.log(`You have scrolled ${roundedScrollPercent}%`);
    });
}

checkScrollLength();

//Opgave 5
const showToastbar = (message, time, position, severity) => {
    const toastbarContainer = document.createElement("div");
    toastbarContainer.classList = "toast-container";

    const toastbarMessage = document.createElement("p");
    toastbarMessage.innerHTML = `${message}`;

    toastbarContainer.appendChild(toastbarMessage);

    L4_5.appendChild(toastbarContainer);

    switch (true) {
        case severity == "sucess":
            toastbarContainer.classList.toggle("sucess-message");
            console.log(toastbarContainer);
            break;
        case severity == "warning":
            toastbarContainer.classList.toggle("warning-message");
            break;
        case severity == "error":
            toastbarContainer.classList.toggle("error-message");
            break;
        default:
            console.error(`Besked ikke modtaget`);
            break;
    }

    switch (true) {
        case position == "tLeft":
            toastbarContainer.classList.toggle("top-left");
            break;
        case position == "tRight":
            toastbarContainer.classList.toggle("top-right");
            break;
        case position == "bLeft":
            toastbarContainer.classList.toggle("bottom-left");
            break;
        case position == "bRight":
            toastbarContainer.classList.toggle("bottom-right");
        default:
            break;
    }

    setTimeout(() => {
        L4_5.removeChild(toastbarContainer);
    }, time)
}

showToastbar("Toastbar!!!", 3000, "tLeft", "error");