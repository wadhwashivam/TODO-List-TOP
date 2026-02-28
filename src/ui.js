// New Task Button

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

newProject.addEventListener("click", () => {
    newProjectDialog.showModal();
});