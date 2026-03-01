// New Task Button

import { addProject, projectArray, setActiveProject } from "./projects.js";

import { addTask } from "./tasks.js";

const newTask = document.querySelector(".newTaskButton");
const newTaskDialog = document.getElementById("newTaskDialog");
const confirmButton = document.getElementById("confirmButton");
const taskDiv = document.getElementById("taskDiv");

newTask.addEventListener("click", () => {
    newTaskDialog.showModal();
});

confirmButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    let taskTitle = document.querySelector("#taskTitle").value;
    let taskDescription = document.querySelector("#taskDescription").value;
    let taskDueDate = document.querySelector("#taskDueDate").value;
    let taskPriority = document.querySelector("#taskPriority").value;

    addTask(taskTitle, taskDescription, taskPriority, taskDueDate);

    let taskDivContent = document.createElement("div");
    taskDivContent.className = "taskDivContent";
    taskDivContent.innerHTML = `${taskTitle} <br> ${taskDescription} <br> ${taskDueDate} <br> ${taskPriority}`;
    taskDiv.append(taskDivContent);



    newTaskDialog.close();
});







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

// Event Delegation
projectList.addEventListener("click", (event) => {
    const projectNameActive = event.target.textContent;
    const projectObj = projectArray.find(p => p.name === projectNameActive);
    setActiveProject(projectObj);
});


// Creating new projects working. 
// Creating new tasks in that specific project working. 
// Basic stuff is working. 
// Only thing left is styling the div and adding the option to remove the tasks, 
// projects, completion, and also when the new project is created and opened, 
// it should remove the tasks from the other projets. 
// Basically refreshing the todo list needs to be implemented.