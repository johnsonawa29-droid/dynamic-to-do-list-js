// Select elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('class', 'remove-btn'); // Add class without classList

        // Assign onclick event to remove the task
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the button to the li
        li.appendChild(removeBtn);

        // Append the li to the task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }
}

// Optional: attach addTask to a button click
document.getElementById('addBtn').onclick = addTask;
