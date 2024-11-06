// Initialize an empty list of tasks
const tasks = [];

// Function to add a new task
function addTask(event) {
    event.preventDefault();  // Prevent the form from reloading the page

    // Get the task text from the input field
    const taskText = document.getElementById('newTask').value;
    if (taskText === '') {
        return ; // Don't add empty tasks
    }

    // Create a new task object
    const task = {
        text: taskText,
        completed: false
    };

    // Add task to the tasks array
    tasks.push(task);

    // Create the task list item (li)
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    // Add task text and checkbox to the li element
    li.innerHTML = taskText;
    li.prepend(checkbox);  // Add the checkbox in front

    // Create and append the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'X';
    li.appendChild(deleteBtn);

    // Add the new task to the top of the list
    document.getElementById('todoList').prepend(li);

    // Clear the input field
    document.getElementById('newTask').value = '';

    // Add event listener to delete the task when the delete button is clicked
    deleteBtn.addEventListener('click', function() {
        li.remove();
        // Remove task from the array
        const index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
        }
        updateTaskCount();
    });

    // Add event listener for the checkbox to toggle task completion
    checkbox.addEventListener('change', function() {
        task.completed = checkbox.checked;
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
        updateTaskCount();
    });

    // Update the task count after adding a task
    updateTaskCount();
}

// Update the task count: completed tasks / total tasks
function updateTaskCount() {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    document.getElementById('taskCount').textContent = `${completedTasks}/${totalTasks} completed`;
}

// Add event listener for the form submission
document.getElementById('taskForm').addEventListener('submit', addTask);
