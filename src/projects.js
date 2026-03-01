


let activeProject = null;

function setActiveProject(project){
    activeProject = project;
}

function getActiveProject(){
    return activeProject;
}

export let projectArray = [];

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

addProject("My Tasks");
setActiveProject(projectArray[0]);




export {addProject , setActiveProject, getActiveProject};

