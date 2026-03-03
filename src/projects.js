let activeProject = null;

function setActiveProject(project){
    activeProject = project;
}

function getActiveProject(){
    return activeProject;
}

export let projectArray = [];

function createProject(name){
    return {
        name: name,
        tasks: []
    };
}

function addProject(projectName){
    if (projectName === ""){
        alert("Project name cannot be empty.");
        return;
    }

    const projectObject = createProject(projectName);
    projectArray.push(projectObject);
}

addProject("My Tasks");
setActiveProject(projectArray[0]);




export {addProject , setActiveProject, getActiveProject};

