

   // Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Check if taskText is not empty
  if (taskText !== "") {
    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Assign onclick event to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append remove button to list item
    li.appendChild(removeButton);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }
}

// Add event listener to Add Task button
addButton.addEventListener("click", addTask);

// Add event listener to allow adding task with Enter key
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
