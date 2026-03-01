// New Task Button

import { addProject } from "./projects.js";


const newTask = document.querySelector(".newTaskButton");
const newTaskDialog = document.getElementById("newTaskDialog");
const confirmButton = document.getElementById("confirmButton");
const outputBox = document.querySelector("output");

newTask.addEventListener("click", () => {
    newTaskDialog.showModal();
});

confirmButton.addEventListener("click", (event) => {
    event.preventDefault();
    newTaskDialog.close();
});

let taskTitle = document.querySelector("#taskTitle").value;
let taskDescription = document.querySelector("#taskDescription").value;
let taskPriority = document.querySelector("#taskDueDate").value;
let taskDueDate = document.querySelector("#taskPriority").value;





// New Project Button

const newProject = document.querySelector(".newProjectButton");
const newProjectDialog = document.getElementById("newProjectDialog");
const confirmProjectButton = document.getElementById("confirmProject");
const projectList = document.querySelector(".projectList");
const cancelProjectButton = document.getElementById("cancelProject");


newProject.addEventListener("click", () => {
    newProjectDialog.showModal();
});


confirmProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    let projectName = document.querySelector("#projectNameInput").value;

    addProject(projectName);

    let projectListItem = document.createElement("li");
    projectListItem.className = "projectListItems";
    projectListItem.textContent = projectName;
    projectList.appendChild(projectListItem);

    newProjectDialog.close();
});

cancelProjectButton.addEventListener("click", () =>{
    newProjectDialog.close();
});
