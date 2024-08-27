let taskCount = 0;

document.getElementById('add-task-button').addEventListener('click', function() {
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();

    if (taskText) {
        taskCount++;
        var taskList = document.getElementById('task-list');
        var taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        taskItem.innerHTML = `
            <span class="task-number">${taskCount}. </span>
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear the input field
    }
});

function deleteTask(button) {
    var taskItem = button.parentElement;
    taskItem.remove();

    // Re-number remaining tasks
    var tasks = document.querySelectorAll('#task-list .task-item');
    taskCount = 0;
    tasks.forEach(task => {
        taskCount++;
        task.querySelector('.task-number').textContent = `${taskCount}. `;
    });
}
