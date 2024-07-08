document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskText = document.getElementById('newTask').value.trim();
    if (taskText) {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.innerHTML = `${taskText} <button>Delete</button>`;
        taskList.appendChild(newTask);
        document.getElementById('newTask').value = '';
    }
});

document.getElementById('taskList').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const taskToRemove = event.target.parentElement;
        taskToRemove.remove();
    }
});