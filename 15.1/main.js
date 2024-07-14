document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('taskList');
    const addTaskButton = document.getElementById('addTaskButton');
    const newTaskInput = document.getElementById('newTask');

    // Завантаження завдань із Local Storage
    loadTasks();

    addTaskButton.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
            saveTasks();
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const taskItem = event.target.parentElement.parentElement;
            if (event.target.classList.contains('delete-button')) {
                taskItem.remove();
            } else if (event.target.classList.contains('complete-button')) {
                taskItem.classList.toggle('completed');
            }
            saveTasks();
        }
    });

    function addTask(text, completed = false) {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span class="checkmark">&#10003;</span>
            <span>${text}</span>
            <div>
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
            </div>
        `;
        if (completed) {
            newTask.classList.add('completed');
        }
        taskList.appendChild(newTask);
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(taskItem => {
            tasks.push({
                text: taskItem.querySelector('span:nth-of-type(2)').textContent,
                completed: taskItem.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task.text, task.completed));
    }
});
