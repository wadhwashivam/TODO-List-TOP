import { getActiveProject } from "./projects.js";


function createTask(taskTitle, taskDescription, taskDueDate, taskPriority){
    return {
        title: taskTitle,
        description: taskDescription,
        dueDate: taskDueDate,
        priority: taskPriority,
    }
}

function addTask(taskTitle, taskDescription, taskDueDate, taskPriority){
    if (taskTitle === ""){
        alert("Task name cannot be empty.");
        return;
    }
    const taskObject = createTask(taskTitle, taskDescription, taskDueDate, taskPriority);
    const activeProject = getActiveProject();
    activeProject.tasks.push(taskObject);
}


export {addTask};