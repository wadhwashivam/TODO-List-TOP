// New Task Button

import { addProject, projectArray, setActiveProject, getActiveProject } from './projects.js';

import { addTask, removeTask } from './tasks.js';

const newTask = document.querySelector('.newTaskButton');
const newTaskDialog = document.getElementById('newTaskDialog');
const confirmButton = document.getElementById('confirmButton');
const taskDiv = document.getElementById('taskDiv');

newTask.addEventListener('click', () => {
  newTaskDialog.showModal();
});

function createTaskElement(task) {
  const taskDivContent = document.createElement('div');
  taskDivContent.className = 'taskDivContent';

  const title = document.createElement('span');
  title.textContent = `Title: ${task.title}`;
  title.className = 'taskContentStyle';

  const description = document.createElement('span');
  description.textContent = `Description: ${task.description}`;
  description.className = 'taskContentStyle';

  const dueDate = document.createElement('span');
  dueDate.textContent = `Due Date: ${task.dueDate}`;
  dueDate.className = 'taskContentStyle';

  const priority = document.createElement('span');
  priority.textContent = `Priority: ${task.priority}`;
  priority.className = 'taskContentStyle';

  const taskCompleted = document.createElement('button');
  taskCompleted.textContent = 'Task Completed';
  taskCompleted.className = 'taskCompletedButton';

  taskCompleted.addEventListener('click', () => {
    taskDivContent.style = 'background-color: lightgreen;';
  });

  const removeTaskButton = document.createElement('button');
  removeTaskButton.textContent = 'Remove Task';
  removeTaskButton.className = 'removeButton';

  removeTaskButton.addEventListener('click', () => {
    removeTask(task.id);
    taskDivContent.remove();
  });

  taskDivContent.append(title, description, dueDate, priority, taskCompleted, removeTaskButton);

  return taskDivContent;

  
}

confirmButton.addEventListener('click', (event) => {
  event.preventDefault();

  let taskTitle = document.querySelector('#taskTitle').value;
  let taskDescription = document.querySelector('#taskDescription').value;
  let taskDueDate = document.querySelector('#taskDueDate').value;
  let taskPriority = document.querySelector('#taskPriority').value;

  addTask(taskTitle, taskDescription, taskDueDate, taskPriority);

  renderTasks();

  newTaskDialog.close();
});

// New Project Button

const newProject = document.querySelector('.newProjectButton');
const newProjectDialog = document.getElementById('newProjectDialog');
const confirmProjectButton = document.getElementById('confirmProject');
const projectList = document.querySelector('.projectList');
const cancelProjectButton = document.getElementById('cancelProject');

newProject.addEventListener('click', () => {
  newProjectDialog.showModal();
});

confirmProjectButton.addEventListener('click', (event) => {
  event.preventDefault();
  let projectName = document.querySelector('.projectNameInput').value;

  addProject(projectName);

  let projectListItem = document.createElement('li');
  projectListItem.className = 'projectListItems';
  projectListItem.textContent = projectName;
  projectList.appendChild(projectListItem);

  newProjectDialog.close();
});

cancelProjectButton.addEventListener('click', () => {
  newProjectDialog.close();
});

function renderTasks() {
  const activeProject = getActiveProject();
  taskDiv.innerHTML = '';
  activeProject.tasks.forEach((task) => {
    const element = createTaskElement(task);
    
    taskDiv.append(element);
  });
}

// Event Delegation
projectList.addEventListener('click', (event) => {
  const projectNameActive = event.target.textContent;
  const projectObj = projectArray.find((p) => p.name === projectNameActive);
  setActiveProject(projectObj);

  renderTasks();
});
