const bonus = document.getElementById("L2_6");

const randInputColorBonus = (string, domElement) => {
    console.log(string);
  
    const domElm = document.createElement(`${domElement}`);
    domElm.textContent = "Color changes with user input";
  
  
    switch(true) {
      case string == "Red":
        domElm.style.color = "red";
        console.log("red");
        break;
      case string == "Blue":
        domElm.style.color = "blue";
          break;
      case string == "Green":
        domElm.style.color = "green";
            break;
      case string == "Yellow":
        domElm.style.color = "yellow";
            break;
      case string == "Purple":
        domElm.style.color = "purple";
        break;
      default:
        domElm.style.color = `rgb(${randRgbColorNum()}, ${randRgbColorNum()}, ${randRgbColorNum()})`;
        domElm.style.background = `rgb(${randRgbColorNum()}, ${randRgbColorNum()}, ${randRgbColorNum()})`;
        console.log("Random color");
        break;
    }
    bonus.appendChild(domElm);
  }

  const createFunkyElement = (userCreatedElement) => {
    const userElement = document.createElement(`${userCreatedElement}`);
    userElement.textContent = `Your created ${userCreatedElement} element!`;

    randInputColorBonus("", "div");

    userElement.appendChild(randInputColorBonus);
  
    bonus.appendChild(userElement);
  }

  createFunkyElement("article");