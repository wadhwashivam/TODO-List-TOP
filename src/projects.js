// this file will have all the projects and will group the tasks in the arrays of the projects.

// delete project function logic

// complete project function logic

let projectArray = [];

function addProject(projectName){
    if (projectName === ""){
        alert("Project name cannot be empty.");
        return;
    }

    const projectObject ={
        name: projectName,
        tasks: []
    }
    projectArray.push(projectObject);
}


export {addProject};