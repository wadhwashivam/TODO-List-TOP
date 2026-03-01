import { addProject } from "./projects.js";


// Delete task function for the button in ui for tasks


// Complete task function for the button in ui for tasks


// this file will contain all the tasks user has created.

function addTask(taskTitle, taskDescription, taskDueDate, taskPriority){
    if (taskTitle === ""){
        alert("Task name cannot be empty.");
        return;
    }

    const taskObject ={
        title: taskTitle,
        description: taskDescription,
        dueDate: taskDueDate,
        priority: taskPriority
    }
    projectObject.tasks.push(taskObject);
}


export {addTask};