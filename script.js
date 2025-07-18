/**
 * @typedef {Object} Task
 * @property {number} id - Unique identifier for the task.
 * @property {string} title - The title of the task.
 * @property {string} description - The description of the task.
 * @property {string} status - The current status of the task ('todo', 'doing', 'done').
 */

/**
 * Initial task data. This array is treated as immutable and will not be directly modified.
 * @type {Task[]}
 */
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Conquer React ⚛️",
    description: "Become proficient in React.js and its ecosystem.",
    status: "todo",
  },
  {
    id: 3,
    title: "Understand Databases ⚙️",
    description: "Learn about relational and non-relational databases, and how to query them.",
    status: "todo",
  },
  {
    id: 4,
    title: "Crush Frameworks 🖼️",
    description: "Master popular web frameworks like Next.js, Angular, or Vue.",
    status: "todo",
  },
  {
    id: 5,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals of JavaScript, including ES6+ features.",
    status: "doing",
  },
  {
    id: 6,
    title: "Never Give Up 🏆",
    description: "Stay persistent and motivated throughout your coding journey.",
    status: "doing",
  },
  {
    id: 7,
    title: "Explore ES6 Features 🚀",
    description: "Dive deep into modern JavaScript features like arrow functions, destructuring, and async/await.",
    status: "done",
  },
  {
    id: 8,
    title: "Have fun 🥳",
    description: "Remember to enjoy the process of learning and building amazing things!",
    status: "done",
  },
];

/**
 * Represents the current state of tasks, which can be derived from initialTasks
 * and subsequent modifications (additions, updates, deletions).
 * @type {Task[]}
 */
let currentTasksState = [...initialTasks];

/**
 * Renders all tasks from the global `currentTasksState` array into their respective Kanban board columns.
 * Clears existing tasks before rendering to prevent duplicates.
 * @returns {void}
 */
function renderTasks() {
  // Clear existing tasks from all containers
  document.querySelectorAll('.tasks-container').forEach(container => {
    container.innerHTML = '';
  });

  currentTasksState.forEach(task => {
    const taskElement = createTaskElement(task);
    const targetContainer = document.querySelector(`.column-div[data-status="${task.status}"] .tasks-container`);
    if (targetContainer) {
      targetContainer.appendChild(taskElement);
    }
  });
  updateTaskCountDisplays();
}

/**
 * Creates a DOM element for a given task.
 * Adds a click event listener to open the task modal.
 * @param {Task} task - The task object to create an element for.
 * @returns {HTMLDivElement} The created task DOM element.
 */
function createTaskElement(task) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task-div';
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;
  taskDiv.addEventListener('click', () => openTaskModal(task));
  return taskDiv;
}

/**
 * Updates the displayed task count for each column header.
 * Iterates through each status column and updates the count based on the currentTasksState.
 * @returns {void}
 */
function updateTaskCountDisplays() {
  const statuses = ['todo', 'doing', 'done'];
  statuses.forEach(status => {
    const count = currentTasksState.filter(task => task.status === status).length;
    const headerElement = document.querySelector(`.column-div[data-status="${status}"] .columnHeader`);
    if (headerElement) {
      const currentText = headerElement.textContent.split('(')[0].trim();
      headerElement.textContent = `${currentText} (${count})`;
    }
  });
}
