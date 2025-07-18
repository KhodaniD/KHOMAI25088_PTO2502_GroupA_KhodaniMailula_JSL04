

# JSL04: Kanban Board Project - Dynamic Task Management System

---

## Project Title

**Kanban Board with Dynamic Task Display & Modal View**

---

## Project Description

This project develops a foundational Kanban board web application, designed to help users visualize and manage their workflow. It features a **responsive layout** that gracefully adapts to various screen sizes, organizing tasks into "TODO," "DOING," and "DONE" columns.

Building upon a static visual base, this version introduces a **JavaScript-driven system for dynamic task display and interactive management directly on the DOM**. Users can now **add new tasks** via a dedicated button, and **click on existing tasks to open a modal** where they can view, **modify**, or **delete** task details. The system emphasizes a seamless user experience with real-time updates to the board, ensuring tasks are always displayed in their correct columns. This project showcases robust DOM manipulation, event handling, and a clean, modular JavaScript architecture for a professional and scalable implementation.

---

## Technologies Used

* **HTML5**: Provides the structural backbone for the web page content and elements, including semantic tags and placeholders for dynamic content.
* **CSS3**: Handles the application's styling, including layout, typography, colors, and comprehensive responsive design for various screen sizes.
    * **CSS Variables**: Utilized to define a flexible color palette, simplifying theme management and ensuring consistency.
    * **Flexbox**: Employed for responsive layout of various components, ensuring flexible arrangement and alignment.
    * **CSS Grid**: Used for arranging the main Kanban columns in a structured and adaptive manner.
* **JavaScript (ES6+)**: Powers all dynamic behavior, including task rendering, event handling, and interactive modal management.
    * **DOM Manipulation**: Extensively used to create, append, update, and remove HTML elements dynamically.
    * **Event Handling**: Manages user interactions such as clicks on tasks and modal buttons.
    * **Modular Structure**: Code is organized into single-responsibility functions for clarity and maintainability.
    * **Array Manipulation**: Fundamental for efficiently storing, adding, updating, and filtering task objects in memory.
* **Google Fonts**: Specifically, 'Plus Jakarta Sans', ensures consistent and modern typography throughout the application.

---

## Features Created and Updated

### Core Features:

* **Responsive Layout**: Adapts seamlessly to different screen sizes, providing an optimal viewing experience on both desktop and mobile devices.
* **Dynamic Kanban Columns**: Tasks are dynamically generated and placed into "TODO," "DOING," and "DONE" columns based on their status, with real-time updates to task counts.
* **No Hard-Coded Tasks**: All tasks are dynamically generated from JavaScript data, ensuring no hard-coded task content remains in the HTML.
* **Desktop Sidebar**: A persistent navigation sidebar on larger screens for board selection.
* **Mobile-Optimized Header**: A compact header designed for mobile devices, displaying the Kanban logo and the current board title.
* **Themed Styling**: Uses CSS variables for a clean, light theme, making visual modifications straightforward.
* **Typography Management**: Ensures consistent font styling across the application via Google Fonts integration and specific CSS rules, including precise modal typography.

### Updates & Enhancements:

* **Interactive Modal-Based Task Management**:
    * **"Add New Task" Modal**: A dedicated button in the header opens a modal for creating new tasks.
    * **"Edit Task" Modal**: Clicking an existing task opens a modal pre-filled with its current details.
    * **Editable Fields**: Both modals feature editable input fields for task `title` and `description`.
    * **Status Dropdown**: A `select` dropdown displays the current `status` and allows users to easily change it to "todo", "doing", or "done".
    * **Save Changes**: A "Save Changes" button updates the task's details and status, instantly reflecting changes on the board.
    * **Delete Task**: An option to "Delete Task" is available in the edit modal, removing the task from the board.
    * **Clear Close Button**: A prominent 'X' button allows users to easily close the modal without saving changes.
    * **Backdrop Effect**: The modal includes a semi-transparent backdrop to focus user attention on its content.

* **Code Quality & Maintainability**:
    * **Modular JavaScript**: Code is structured into single-responsibility functions (e.g., `renderTasks`, `openTaskModal`, `addNewTask`, `updateTaskState`, `deleteTask`), enhancing readability and maintainability.
    * **Descriptive Naming Conventions**: All variables, functions, and elements are named clearly and meaningfully, making the codebase immediately understandable.
    * **JSDoc Comments**: Every major function and module is thoroughly documented with JSDoc comments, including descriptions, parameters, and return values, ensuring self-documented and easily understandable code.

---

## Setup Instructions

To run this project locally, simply follow these steps:

1.  **Clone the repository:**

    If you haven't already, clone the project repository to your local machine using the command below:

    ```bash
    git clone: https://github.com/KhodaniD/KHOMAI25088_PTO2502_GroupA_KhodaniMailula_JSL04
    ```

2.  **Navigate to the project directory:**

    Open your terminal or command prompt and change to the project's root directory:

    ```bash
    cd kanban-board-project/ # Replace with your actual project folder name
    ```

3.  **Open `index.html`:**

    Locate the `index.html` file in the root of the project directory. Double-click this file or drag it into your preferred web browser (e.g., Chrome, Firefox, Safari) to open it.

    The Kanban board will display immediately with the initial tasks.

---

## Working Usage Examples

### Desktop View:

* Open `index.html` in a desktop browser.
* Observe the full-width sidebar on the left with the Kanban logo and board list.
* The Kanban board will display with tasks dynamically rendered in their respective "TODO," "DOING," and "DONE" columns, matching the provided design.
* Click the **"+ Add New Task"** button in the header to open the "Add New Task" modal. Fill in details and click "Create Task" to see it appear on the board.
* Click on any existing task card to open the "Edit Task" modal.
* Modify the task's title, description, or status in the modal. Click "Save Changes" to update the task on the board, observing it move columns if the status changed.
* In the "Edit Task" modal, click "Delete Task" to remove the task from the board.
* Resize your browser window to simulate different desktop screen sizes; the columns and modal will responsively adjust their layout.

### Mobile View:

* Open `index.html` in a mobile browser or use your desktop browser's developer tools to enable device emulation (e.g., Chrome DevTools -> Toggle device toolbar).
* The desktop sidebar will disappear, optimizing screen space.
* The header will show a compact "Kanban" logo along with the current board title.
* The Kanban columns ("TODO," "DOING," and "DONE") will stack vertically, making them easily scrollable on smaller screens.
* The "Add New Task" and "Edit Task" modals will adapt responsively to the mobile screen, ensuring input fields and buttons are touch-friendly and legible.
* Test adding, editing, and deleting tasks via the modals on mobile, observing the board updates.

---

## Interaction Instructions

This project provides interactive task management directly via the user interface:

* **Adding a New Task:**
    1.  Click the **"+ Add New Task"** button located in the top right of the header.
    2.  A modal will appear. Enter the task's title and description in the provided input fields.
    3.  Select the desired status ("todo", "doing", or "done") from the dropdown.
    4.  Click the **"Create Task"** button. The new task will instantly appear on the Kanban board in the chosen column.

* **Editing an Existing Task:**
    1.  Click on any task card displayed on the Kanban board.
    2.  An "Edit Task" modal will open, pre-filled with the task's current title, description, and status.
    3.  Modify any of the details as needed.
    4.  Change the task's status using the dropdown if you wish to move it to another column.
    5.  Click the **"Save Changes"** button. The task will update on the board, moving to a new column if its status was changed.

* **Deleting a Task:**
    1.  Click on the task card you wish to delete to open the "Edit Task" modal.
    2.  Inside the modal, click the **"Delete Task"** button.
    3.  The task will be immediately removed from the Kanban board.

* **Closing the Modal:**
    * To close any open modal without saving changes, click the **'X' icon** in the top right corner of the modal.

This Kanban board now serves as a robust example of dynamic UI rendering, interactive task management (Create, Read, Update, Delete), and responsive design, providing a complete and intuitive user experience.

---
