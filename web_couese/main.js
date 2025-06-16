// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // DOM elements
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const tasksList = document.getElementById('tasks');
    const taskTableBody = document.getElementById('taskTableBody');
  
    // Function to add a new task
    function addTask() {
      const task = taskInput.value.trim();
      if (task !== "") {
        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = task;
  
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
  
        // Add event listener to delete the task when clicked
        deleteButton.addEventListener('click', function () {
          li.remove();
          updateTaskTable();
        });
  
        // Append delete button to the task item
        //li.appendChild(deleteButton);
  
        // Add task to the list
        tasksList.appendChild(li);
  
        // Clear the input field
        taskInput.value = "";
  
        // Update task table
        updateTaskTable();
      }
    }
  
    // Function to update the task table
    function updateTaskTable() {
      // Clear the existing table rows
      taskTableBody.innerHTML = '';
  
      // Iterate over the tasks list and update the table
      const taskItems = tasksList.querySelectorAll('li');
      taskItems.forEach((task, index) => {
        const row = document.createElement('tr');
        const taskCell = document.createElement('td');
        const actionCell = document.createElement('td');
  
        taskCell.textContent = task.textContent.replace('Delete', '').trim(); // Get task text
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
          task.remove();
          updateTaskTable();
        });
        actionCell.appendChild(deleteButton);
        
        row.appendChild(taskCell);
        row.appendChild(actionCell);
        taskTableBody.appendChild(row);
      });
    }
  
    // Add event listener to the "Add Task" button
    addTaskBtn.addEventListener('click', addTask);
  
    // Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  
  });
  