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
        userProjects.map((x, index) => {
            if ( x[0] === title ) {
                userProjects.splice(index, 1)
            }
        })
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
        title[1].forEach(task => {
            const titleTask = document.createElement('li')
            titleTask.innerHTML = task['title']
            titleTask.style.display = 'none'
            folder.appendChild(titleTask)
        })

        projDiv.appendChild(folder)
    })
}

export function addTaskToMain(event) {
    const main = document.querySelector('main')
    const tasksExist = document.querySelector('.tasksDiv')
    if (tasksExist) tasksExist.remove()

    const tasks = document.createElement('div')
    const taskTitle = document.createElement('h3')
    const taskDate = document.createElement('h3')
    const taskPriority = document.createElement('h3')
    const taskDone = document.createElement('h3')
    const titlesDiv = document.createElement('div')

    
    taskTitle.innerHTML = 'Task description'
    taskDate.innerHTML = 'Finish Date'
    taskPriority.innerHTML = 'Task Priority'
    taskDone.innerHTML = 'Task Done'

    titlesDiv.appendChild(taskTitle)
    titlesDiv.appendChild(taskDate)
    titlesDiv.appendChild(taskPriority)
    titlesDiv.appendChild(taskDone)
    tasks.appendChild(titlesDiv)

    titlesDiv.classList.add('titlesDiv')
    tasks.classList.add('tasksDiv')

    if (localStorage.projects) {
        userProjects = JSON.parse(localStorage.getItem('projects'))

        userProjects.map((x, index) => {
            if ( x[0] === event.textContent ) {
                userProjects[index][1].forEach(task => {
                    const taskLine = document.createElement('div')
                    const title = document.createElement('h3')
                    const date = document.createElement('h3')
                    const priority = document.createElement('h3')
                    const taskDone = document.createElement('input')

                    taskLine.classList.add('taskLine')
                    taskDone.setAttribute('type', 'checkbox')

                    title.textContent = task['title']                                      
                    date.textContent = task['date']                                       
                    priority.textContent = task['priority'] 

                    switch (task['priority']) {
                        case 'High':
                            taskLine.classList.add('high')
                            break;
                        case 'Medium':
                            taskLine.classList.add('medium')
                            break;
                        case 'Low':
                            taskLine.classList.add('low')
                            break;
                    }
                                                                                              
                    taskLine.appendChild(title)
                    taskLine.appendChild(date)
                    taskLine.appendChild(priority)
                    taskLine.appendChild(taskDone)  

                    tasks.appendChild(taskLine)
                    main.prepend(tasks)
                })
            }
        })
    }
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
            }
        })
    }
}
    

