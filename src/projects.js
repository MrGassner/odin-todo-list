export default function projects() {
    const newProjectModal = (() => {
        const modal = document.createElement('div')
        const modalBody = document.createElement('div')
        const modalTitle = document.createElement('h2')
        const modalBtn = document.createElement('div')
        const modalForm = document.createElement('form')
        const projTitle = document.createElement('input')
        const closeModal = document.createElement('button')
        const submitModal = document.createElement('button')

        modalBtn.classList.add('modalBtn')
        modalTitle.classList.add('modalTitle')
        modalForm.classList.add('modalForm')
        modalForm.setAttribute('id', 'newFolder')
        projTitle.classList.add('modalProjTitle')
        projTitle.required = true
        modalBody.classList.add('modalBody')
        modal.classList.add('addModal')
        closeModal.classList.add('close')
        submitModal.classList.add('submit')
        submitModal.type = 'submit'
        submitModal.setAttribute('form', 'newFolder')

        modalTitle.innerHTML = 'New Project Name'
        closeModal.innerHTML = 'Cancel'
        submitModal.innerHTML = 'Create'

        modalForm.appendChild(projTitle)
        modalBtn.appendChild(submitModal)
        modalBtn.appendChild(closeModal)
        modalBody.appendChild(modalTitle)
        modalBody.appendChild(modalForm)
        modalBody.appendChild(modalBtn)
        modal.appendChild(modalBody)

        document.body.appendChild(modal)
    })();   
}

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

    userProjects.push(title)
    localStorage.projects = JSON.stringify(userProjects)
    addToDisplay()
}

function deleteProject(title) {
    console.log(title)
}

export function addToDisplay() {
    const projDiv = document.querySelector('.projDiv')
    projDiv.innerHTML = ''

    if (localStorage.projects ) {
        userProjects = JSON.parse(localStorage.getItem('projects'))
    }

    userProjects.forEach(title => {
        const folder = document.createElement('ul')
        folder.innerHTML = title
        folder.classList.add('project', 'closed')

        projDiv.appendChild(folder)
    })
}


