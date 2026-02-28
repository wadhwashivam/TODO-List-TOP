// New Task Button

const newTask = document.querySelector(".newTaskButton");
const newTaskDialog = document.getElementById("newTaskDialog");

newTask.addEventListener("click", () => {
    newTaskDialog.showModal();
});






// New Project Button

const newProject = document.querySelector(".newProjectButton");
const newProjectDialog = document.getElementById("newProjectDialog");

newProject.addEventListener("click", () => {
    newProjectDialog.showModal();
});