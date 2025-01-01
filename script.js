function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    // Create a new list item (task)
    const newTask = document.createElement("li");
    
    // Create a span element to hold the task text
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    
    // Create a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");  // Optional: add a class for styling

    // Add click event to the remove button to delete the task
    removeBtn.addEventListener("click", function() {
        taskList.removeChild(newTask);  // Remove task when button is clicked
    });

    // Append the task text and remove button to the new task
    newTask.appendChild(taskContent);
    newTask.appendChild(removeBtn);

    // Append the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field after task is added
    taskInput.value = "";
    taskInput.focus();  // Focus back to input for ease of adding more tasks
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Optional: Allow Enter key to also trigger adding a task
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});