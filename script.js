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
