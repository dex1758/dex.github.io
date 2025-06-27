const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clock = document.getElementById('clock');

const tasks = [];

function formatTime(seconds) {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
}

function createTaskElement(task) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;
    if (task.completed) span.classList.add('completed');

    const timer = document.createElement('span');
    timer.className = 'timer';
    timer.textContent = formatTime(task.timeSpent);

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'task-button';
    toggleBtn.title = 'Выполнено';
    toggleBtn.textContent = task.completed ? '↩️' : '✅';
    toggleBtn.onclick = () => {
        task.completed = !task.completed;
        renderTasks();
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'task-button';
    deleteBtn.title = 'Удалить';
    deleteBtn.textContent = '🗑️';
    deleteBtn.onclick = () => {
        tasks.splice(tasks.indexOf(task), 1);
        renderTasks();
    };

    actions.appendChild(timer);
    actions.appendChild(toggleBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    return li;
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        task.element = createTaskElement(task);
        taskList.appendChild(task.element);
    });
}

function startTimers() {
    setInterval(() => {
        tasks.forEach(task => {
            if (!task.completed) {
                task.timeSpent++;
            if (task.element) {
                const timer = task.element.querySelector('.timer');
            if (timer) {
                timer.textContent = formatTime(task.timeSpent);
            }
            }
            }
        });
}, 1000);
}

function updateClock() {
    setInterval(() => {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        clock.textContent = `${h}:${m}:${s}`;
    }, 1000);
}

taskForm.onsubmit = (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;
    const task = {
        text,
        completed: false,
        timeSpent: 0,
        element: null
    };
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
};

renderTasks();
startTimers();
updateClock();