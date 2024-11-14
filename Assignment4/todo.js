// Empty list of tasks
const tasks = [];

// Add a new task
function addTask(event) {
    event.preventDefault();  // Prevents reload

    // Get task text from input field
    const taskText = document.getElementById('newTask').value.trim();
    if (taskText === '') {
        return ; // Don't add empty tasks
    }

    // Create new task object
    const task = {
        text: taskText,
        completed: false
    };

    // Add task tasks array
    tasks.push(task);

    // Create task list item
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    
    // Add task text and checkbox to li 
    li.innerHTML = taskText;
    // Add checkbox in front
    li.prepend(checkbox);

    // Create and append delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'X';
    li.appendChild(deleteBtn);

    // Add new task to top of list
    document.getElementById('todoList').prepend(li);

    // Clear input field
    document.getElementById('newTask').value = '';

    // Add event listener to delete task when clicked
    deleteBtn.addEventListener('click', function() {
        li.remove();
        // Remove task
        const index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
        }
        updateTaskCount();
    });

    // Add event listener for checkbox to toggle completion
    checkbox.addEventListener('change', function() {
        task.completed = checkbox.checked;
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
        updateTaskCount();
    });

    // Update task count after adding a task
    updateTaskCount();
}

// Update task count
function updateTaskCount() {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    document.getElementById('taskCount').textContent = `${completedTasks}/${totalTasks} completed`;
}

// Add event listener for form submission
document.getElementById('taskForm').addEventListener('submit', addTask);
