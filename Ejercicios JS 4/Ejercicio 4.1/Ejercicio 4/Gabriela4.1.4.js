let tasklist = [];


window.addEventListener('load', () => {
    if(localStorage.getItem('tasklist')) {
        tasklist = JSON.parse(localStorage.getItem('tasklist'))
        tasklist.forEach(task => {
            showTask(task)
        });
    }

    const form = document.getElementById('taskForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const id = tasklist.length;
        const newTask = form.querySelector('#taskInput').value;
        const priority = form.querySelector('#prioritySelect').value;

        tasklist.push({id: id, task: newTask, priority: priority, completed: false});
        localStorage.setItem('tasklist', JSON.stringify(tasklist))
        location.reload()
    })

    const select = document.getElementById('filterSelect');
    if(localStorage.getItem('filtro')) {
        const filtroPos = ['todas', 'pendientes', 'completadas'].findIndex((el) => el === localStorage.getItem('filtro'));
        console.log(filtroPos);
        document.getElementById('filterSelect').options[filtroPos].selected = true;
    }
    
    select.addEventListener('change', () => {
        filtrar(select.value)
    })

    function showTask(task) {
        const li = document.createElement('li');
        li.id = task.id;
        if (task.completed) {
            li.classList.add('completed')
        }
        li.innerHTML = `
        <p><strong>${task.task}</strong> <span ` + (!task.completed? ` class="${task.priority}"` : '') + `>${task.priority}</span></p>
        <div>
            <button id="completar${task.id}" type="button">Completar</button>
            <button id="eliminar${task.id}" type="button">Eliminar</button>
        </div>
        `;
        document.getElementById('taskList').appendChild(li)
    
        document.getElementById(`completar${task.id}`).addEventListener('click', () => {
            console.log('trddrfvh');
            task.completed = true;
            localStorage.setItem('tasklist', JSON.stringify(tasklist))
            location.reload()
        })
        document.getElementById(`eliminar${task.id}`).addEventListener('click', () => {
            tasklist = tasklist.filter((_task) => _task.id != task.id)
            document.getElementById(task.id).remove()
            localStorage.setItem('tasklist', JSON.stringify(tasklist))
            location.reload()
        })
    }

    function filtrar(filtro) {
        console.log(filtro);
        localStorage.setItem('filtro', filtro)
        switch (filtro) {
            case 'todas':
                tasklist.sort((taskA, taskB) => taskA.priority.localeCompare(taskB.priority))
                break;
            case 'pendientes':
                tasklist.sort((taskA) => taskA.completed? 1 : -1)
                break;
            case 'completadas':
                tasklist.sort((taskA) => taskA.completed? -1 : 1)
                break;
        
            default:
                break;
        }
        
        console.table(tasklist);
        localStorage.setItem('tasklist', JSON.stringify(tasklist))
        location.reload()
    }
})

