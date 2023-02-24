let userProjects = []

export function ProjectManager(title, action) {
    switch (action) {
        case 'create':
            addProject(title)
            break;
        case 'delete':
            deleteProject(title)
            break;
        default:
            break;
    }
}

function addProject(title) {
    if (localStorage.projects) {
        userProjects = JSON.parse(localStorage.getItem('projects'))
    }

    userProjects.push([title, []])
    localStorage.projects = JSON.stringify(userProjects)
    addToDisplay()
}

function deleteProject(title) {
    if (localStorage.projects) {
        userProjects = JSON.parse(localStorage.getItem('projects'))

        userProjects = userProjects.filter(e => e !== title);
        localStorage.projects = JSON.stringify(userProjects)
    }
}

export function addToDisplay() {
    const projDiv = document.querySelector('.projDiv')
    projDiv.innerHTML = ''

    if (localStorage.projects ) {
        userProjects = JSON.parse(localStorage.getItem('projects'))
    }

    userProjects.forEach(title => {
        const folder = document.createElement('ul')
        folder.innerHTML = title[0]
        folder.classList.add('project', 'closed')

        projDiv.appendChild(folder)
    })
}

export function addTaskBtn() {
    const main = document.querySelector('main')
    const addTask = document.createElement('button')

    addTask.classList.add('addTask')
    addTask.innerHTML = '+ Add Task'

    main.appendChild(addTask)
}

export function addTask(taskTitle, taskDate, taskPrior) {
    const currTitle = document.querySelector('.currentTitle').innerHTML

    if (localStorage.projects) {
        userProjects = JSON.parse(localStorage.getItem('projects'))

        userProjects.map((x, index) => {
            if ( x[0] === currTitle ) {

                userProjects[index][1].push({title: taskTitle, date: taskDate, priority: taskPrior})
                localStorage.projects = JSON.stringify(userProjects)
                console.log(userProjects[index])
            }
        })
    }
}
    

