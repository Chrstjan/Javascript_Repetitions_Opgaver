let L1_1 = document.querySelector("#L1_1");
let L1_2 = document.querySelector("#L1_2");
let L1_3 = document.querySelector("#L1_3");
let L1_4 = document.querySelector("#L1_4");
let L1_5 = document.querySelector("#L1_5");
let L1_6 = document.querySelector("#L1_6");

// Opgave 1
function fullName(firstName, lastName) {
  let greeting = "Welcome " + firstName + " " + lastName;
  let newH3 = document.createElement("h3");
  newH3.innerText = greeting;
  L1_1.appendChild(newH3);
}

// Opgave 2
const hideElement = () => {
  L1_2.addEventListener("click", () => {
    L1_2.classList.toggle("hide-element");
  });
};

//Opgave 3
const changeColor = () => {
  const colorBtn = document.createElement("button");
  colorBtn.classList.add("color-btn");
  colorBtn.textContent = "Change Color";

  L1_3.appendChild(colorBtn);

  let colorMessage = document.createElement("p");
  colorMessage.classList.add("hidden-message");
  colorMessage.textContent = "Changed Color";
  L1_3.appendChild(colorMessage);

  colorBtn.addEventListener("click", () => {
    let headerText = document.querySelector("#L1_3 h4");
    headerText.classList.toggle("change-color");

    colorMessage.classList.toggle("hidden-message");
    console.log("Color");
  });
};

//Opgave 4
const clickCounter = () => {
  let clickAmount = 0;

  const clickMessage = document.createElement("p");
  clickMessage.textContent = `${clickAmount} Clicks`;

  const clickBtn = document.createElement("button");
  clickBtn.textContent = "Click Me";

  L1_4.appendChild(clickMessage);
  L1_4.appendChild(clickBtn);

  clickBtn.addEventListener("click", () => {
    clickAmount++;
    clickMessage.textContent = `${clickAmount} Clicks`;
    console.log(clickAmount);
  });
};

//Opgave 5
const wordLength = (word) => {
  const userWord = document.createElement("h3");
  userWord.textContent = word;

  // console.log(word.length);

  const wordLength = document.createElement("p");
  wordLength.textContent = `Your words length: ${word.length} Characters`;

  L1_5.appendChild(userWord);
  L1_5.appendChild(wordLength);
};

//Opgave 6
const filterWord = (word) => {
  //gi for global ignore so it does it for each word
  const filteredWord = word.replace(/[aeiouyæøå]/gi, "");

  const newWord = document.createElement("p");
  newWord.textContent = filteredWord;

  L1_6.appendChild(newWord);
};

const createElement = (userCreatedElement) => {
  const userElement = document.createElement(`${userCreatedElement}`);
  userElement.textContent = `Your created ${userCreatedElement} element!`;

  L1_6.appendChild(userElement);
}

// Function Calls
fullName("Banjo", "Joe");
hideElement();
changeColor();
clickCounter();
wordLength("Banjo Joe");
filterWord("Abemad");
createElement("div");