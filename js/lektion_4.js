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
    scrollMessage.innerHTML = `You have scrolled %`;
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