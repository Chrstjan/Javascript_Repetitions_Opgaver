let L3_1 = document.querySelector("#L3_1");
let L3_2 = document.querySelector("#L3_2");
let L3_3 = document.querySelector("#L3_3");
let L3_4 = document.querySelector("#L3_4");
let L3_5 = document.querySelector("#L3_5");

const webDevClass = {
    class_number: "h1we010124",
    classroom: "p025",
    students: [
        "Christian",
        "Evelina",
        "Jack",
        "Peter"
    ],
    createStudent(studentName) {
        this.students.push(studentName);
        this.students.forEach((student) => {
            console.log(student);

        })
    }
}

const addStudentBtn = document.createElement("button");
addStudentBtn.textContent = "Add Jonas to students";
L3_1.appendChild(addStudentBtn);

const studentMessage = document.createElement("p");
studentMessage.classList.add("hidden");
L3_1.appendChild(studentMessage);

addStudentBtn.addEventListener("click", () => {

    if (webDevClass.students.includes("Jonas")) {
        console.log("Fuck Jonas");
        studentMessage.classList.remove("hidden");
        studentMessage.innerText = "Jonas findes allerede i elever!";
    }
    else {
        webDevClass.createStudent("Jonas");
        studentMessage.classList.remove("hidden");
        studentMessage.innerText = "Jonas blev tilføjet";

        let students = webDevClass.students;
        const studentsElm = document.createElement("p");
        studentsElm.textContent = students;

        L3_1.appendChild(studentsElm);
    }
});

function showClassInfo() {
    let classNumber = webDevClass.class_number;
    const classNumberElm = document.createElement("h3");
    classNumberElm.textContent = classNumber;

    let classRoom = webDevClass.classroom;
    const classroomElm = document.createElement("p");
    classroomElm.textContent = classRoom;

    let students = webDevClass.students;
    const studentsElm = document.createElement("p");
    studentsElm.textContent = students;

    L3_1.appendChild(classNumberElm);
    L3_1.appendChild(classroomElm);
    L3_1.appendChild(studentsElm);
}

showClassInfo();

function plusNumbers() {
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8,  9, 10];
    
    let numberSum = numbersArray.reduce((addTogether, numbersToAdd) => {
        return addTogether + numbersToAdd;
    });

    console.log(numberSum);
    
    numbersArray.forEach((number) => {
        let allNumbers = document.createElement("p");
        allNumbers.innerText = number;
        L3_2.appendChild(allNumbers);
    })

    let numberAddedTogether = document.createElement("h3");
    numberAddedTogether.innerText = `Tal sammenlagt: ${numberSum}`;

    L3_2.appendChild(numberAddedTogether);
}

plusNumbers();

function showObjectKeys(dataObject) {
     for (const property in dataObject) {
        let objectKeys = document.createElement("p");
        objectKeys.innerText = `${property}: ${dataObject[property]}`;

        L3_3.appendChild(objectKeys);
    }
}

showObjectKeys(webDevClass);