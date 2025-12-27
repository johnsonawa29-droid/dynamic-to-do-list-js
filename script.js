
// Setup event listener for page load
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Create the addTask function
  function addTask() {
    // Retrieve and trim the task input value
    const taskText = taskInput.value.trim();

    // Check if taskText is empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Assign onclick event to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append remove button to list item
    li.appendChild(removeButton);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Attach event listener to Add Task button
  addButton.addEventListener('click', addTask);

  // Allow adding tasks by pressing the Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Invoke addTask on DOMContentLoaded
  addTask();
});
