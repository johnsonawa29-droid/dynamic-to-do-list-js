// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Select DOM elements
    const addButton = document.getElementById('add-btn'); // "Add Task" button
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // UL element to display tasks

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input value and trim whitespace

        // Alert if input is empty
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('class', 'remove-btn'); // Set class without classList

        // Remove task when button is clicked
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append remove button to the list item
        li.appendChild(removeBtn);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener: Add task when "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Event listener: Add task when Enter key is pressed in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
s