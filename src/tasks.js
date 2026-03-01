import { getActiveProject } from "./projects.js";


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
    const activeProject = getActiveProject();
    activeProject.tasks.push(taskObject);
}


export {addTask};