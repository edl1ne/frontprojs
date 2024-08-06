$(document).ready(function() {
    const taskList = $('#taskList');
    const addTaskButton = $('#addTaskButton');
    const newTaskInput = $('#newTask');

    loadTasks();

    addTaskButton.click(function() {
        const taskText = newTaskInput.val().trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.val('');
            saveTasks();
        }
    });

    taskList.on('click', '.delete-button', function() {
        $(this).closest('li').remove();
        saveTasks();
    });

    taskList.on('click', '.complete-button', function() {
        const taskItem = $(this).closest('li');
        taskItem.toggleClass('completed');
        saveTasks();
    });

    taskList.on('click', 'li', function() {
        const taskText = $(this).find('span').eq(1).text();
        $('#taskDetails').text(taskText);
        $('#taskModal').modal('show');
    });

    function addTask(text, completed = false) {
        const newTask = $(`
            <li class="list-group-item d-flex justify-content-between align-items-center ${completed ? 'completed' : ''}">
                <span class="checkmark">&#10003;</span>
                <span>${text}</span>
                <div>
                    <button class="complete-button btn btn-success btn-sm">Complete</button>
                    <button class="delete-button btn btn-danger btn-sm">Delete</button>
                </div>
            </li>
        `);
        taskList.append(newTask);
    }

    function saveTasks() {
        const tasks = [];
        taskList.find('li').each(function() {
            tasks.push({
                text: $(this).find('span').eq(1).text(),
                completed: $(this).hasClass('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task.text, task.completed));
    }
});
