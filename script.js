// Task Manager JavaScript

// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    // Create a new list item
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    // Append the task to the list
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
}
// Fixed JavaScript: Clear the input after adding a task
// function addTask() {
//     const taskText = taskInput.value.trim();
    
//     if (taskText === "") {
//         alert("Please enter a task!");
//         return;
//     }
    
//     // Create a new list item
//     const newTask = document.createElement("li");
//     newTask.textContent = taskText;

//     // Append the task to the list
//     taskList.appendChild(newTask);

//     // Clear the input field after task is added
//     taskInput.value = "";  // Reset the input field

//     // Focus back to input for ease of adding more tasks
//     taskInput.focus();
// }
// function addTask() {
//     const taskText = taskInput.value.trim();
    
//     if (taskText === "") {
//         alert("Please enter a task!");
//         return;
//     }
    
//     // Create a new list item
//     const newTask = document.createElement("li");
//     newTask.textContent = taskText;

//     // Add click event to remove the task
//     newTask.addEventListener("click", function() {
//         taskList.removeChild(newTask);  // Remove task when clicked
//     });

//     // Append the task to the list
//     taskList.appendChild(newTask);

//     // Clear the input field after task is added
//     taskInput.value = "";
//     taskInput.focus();  // Focus back to input for ease of adding more tasks
// }

// Event listener for the "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Optional: Allow Enter key to also trigger adding a task
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});