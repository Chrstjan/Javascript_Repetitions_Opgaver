let L2_1 = document.querySelector("#L2_1");
let L2_2 = document.querySelector("#L2_2");
let L2_3 = document.querySelector("#L2_3");
let L2_4 = document.querySelector("#L2_4");
let L2_5 = document.querySelector("#L2_5");

//Opgave 1
const checkInputType = (input) => {
  const inputType = typeof input;

  const typeText = document.createElement("p");
  typeText.textContent = `${input} er af typen: ${inputType}`;

  L2_1.appendChild(typeText);
};

//Opgave 2
const checkEmail = (email) => {
  let validMessage = document.createElement("p");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let validEmail = false;

  function validateEmail() {
    validEmail = emailRegex.test(email);
    if (validEmail) {
      console.log("Valid");
      validMessage.textContent = `Email er valid`;
    } else {
      console.log("Not Valid");
      validMessage.textContent = `Email er ikke valid`;
    }
  }

  validateEmail();

  L2_2.appendChild(validMessage);
};

//Opgave 3
const checkStringLength = (string) => {
  const lengthMessage = document.createElement("p");

  if (string.length > 2) {
    lengthMessage.textContent = "String er længere end 2 bogstaver";
  } else if (string.length == 2) {
    lengthMessage.textContent = "String er lig med 2 bogstaver";
  } else {
    lengthMessage.textContent = "String er under 2 bogstaver";
  }

  L2_3.appendChild(lengthMessage);
};

//Opgave 4

const randNumber = (numOne, numTwo) => {
  const randNumBtn = document.createElement("button");
  randNumBtn.textContent = `Få et tilfældigt tal mellem ${numOne} & ${numTwo}`;
  L2_4.appendChild(randNumBtn);

  randNumBtn.addEventListener("click", () => {
    let randNum = Math.floor(Math.random() * (numTwo - numOne + 1) + numOne);

    const randNumMessage = document.createElement("p");
    randNumMessage.textContent = `Dit tilfældige tal mellem ${numOne} og ${numTwo} er: ${randNum}`;

    L2_4.appendChild(randNumMessage);
  });
};

//Opgave 5
const randRgbColorNum = () => {
  return Math.floor(Math.random() * 256);
};

const randRgbColor = () => {
  let colorBtn = document.createElement("button");
  colorBtn.textContent = "Click me for a random RGB color";
  L2_5.appendChild(colorBtn);

  colorBtn.addEventListener("click", () => {
    let rgbColor = `rgb(${randRgbColorNum()}, ${randRgbColorNum()}, ${randRgbColorNum()})`;
    console.log(rgbColor);

    const boxContainer = document.createElement("div");
    boxContainer.innerHTML = "";

    let rgbBox = `<span style="background:${rgbColor}"><h2>RGB Color: ${rgbColor}</h2></span>`;
    boxContainer.innerHTML += rgbBox;
    L2_5.appendChild(boxContainer);
  });
};

//Calling functions
checkInputType("Lorem Ipsum");
checkEmail("none@fake.com");
checkStringLength("Lorem Imsum");
randNumber(4, 32);
randRgbColor();
