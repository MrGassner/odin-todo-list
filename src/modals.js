export default function modals() {
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
    
    const delProjectModal = (() => {
        const delModal = document.createElement('div')
        const delModalBody = document.createElement('div')
        const modalTitle = document.createElement('h2')
        const modalContent = document.createElement('h3')
        const modalBtn = document.createElement('div')
        const closeModal = document.createElement('button')
        const deleteModal = document.createElement('button')

        deleteModal.setAttribute('type', 'submit')

        delModal.classList.add('delModal')
        delModalBody.classList.add('delModalBody')
        modalTitle.classList.add('modalTitle')
        modalContent.classList.add('modalContent')
        closeModal.classList.add('closeDel')
        deleteModal.classList.add('delete')
        modalBtn.classList.add('modalBtn')

        modalTitle.innerHTML = 'Are you sure you want to delete?'
        closeModal.innerHTML = 'Cancel'
        deleteModal.innerHTML = 'Delete'
        modalContent.innerHTML = document.querySelector('.currentTitle').textContent

        modalBtn.appendChild(deleteModal)
        modalBtn.appendChild(closeModal)
        delModalBody.appendChild(modalTitle)
        delModalBody.appendChild(modalContent)
        delModalBody.appendChild(modalBtn)
        delModal.appendChild(delModalBody)
        

        document.body.appendChild(delModal)
    })();

    const addTasks = (() => {
        const tasksModal = document.createElement('div')
        const tasksModalBody = document.createElement('div')
        const modalTitle = document.createElement('h2')
        const tasksForm = document.createElement('form')
        const titleForm = document.createElement('input')
        const dateForm = document.createElement('input')
        const priorDiv = document.createElement('div')
        const priorTitle = document.createElement('h3')
        const highLabel = document.createElement('label')
        const priorHigh = document.createElement('input')
        const mediumLabel = document.createElement('label')
        const priorMedium = document.createElement('input')
        const lowLabel = document.createElement('label')
        const priorLow = document.createElement('input')
        const modalBtn = document.createElement('div')
        const closeModal = document.createElement('button')
        const submitModal = document.createElement('button')

        submitModal.setAttribute('type', 'submit')
        // submitModal.setAttribute('form', 'newTask')
        tasksForm.setAttribute('id', 'newTask')
        dateForm.setAttribute('type', 'date')
        highLabel.setAttribute('for', 'high')
        priorHigh.setAttribute('type', 'radio')
        priorHigh.setAttribute('name', 'priority')
        priorHigh.setAttribute('value', 'High')
        priorHigh.setAttribute('id', 'high')
        mediumLabel.setAttribute('for', 'medium')
        priorMedium.setAttribute('type', 'radio')
        priorMedium.setAttribute('name', 'priority')
        priorMedium.setAttribute('value', 'Medium')
        priorMedium.setAttribute('id', 'medium')
        lowLabel.setAttribute('for', 'low')
        priorLow.setAttribute('type', 'radio')
        priorLow.setAttribute('name', 'priority')
        priorLow.setAttribute('value', 'Low')
        priorLow.setAttribute('id', 'low')

        tasksModal.classList.add('tasksModal')
        tasksModalBody.classList.add('tasksModalBody')
        modalTitle.classList.add('modalTitle')
        tasksForm.classList.add('tasksForm')
        priorDiv.classList.add('priorDiv')
        priorTitle.classList.add('priorTitle')
        titleForm.classList.add('titleForm')
        dateForm.classList.add('dateForm')
        priorHigh.classList.add('priorityForm')
        priorMedium.classList.add('priorityForm')
        priorLow.classList.add('priorityForm')
        modalBtn.classList.add('modalBtn')
        closeModal.classList.add('closeModal')
        submitModal.classList.add('submitModal')


        modalTitle.innerHTML = 'Add New Task'
        submitModal.innerHTML = 'Create'
        closeModal.innerHTML = 'Cancel'
        titleForm.placeholder = 'Task Title'
        priorTitle.innerHTML = 'Priority'
        highLabel.innerHTML = 'High'
        mediumLabel.innerHTML = 'Medium'
        lowLabel.innerHTML = 'Low'


        priorDiv.appendChild(priorTitle)
        priorDiv.appendChild(priorHigh)
        priorDiv.appendChild(highLabel)
        priorDiv.appendChild(priorMedium)
        priorDiv.appendChild(mediumLabel)
        priorDiv.appendChild(priorLow)
        priorDiv.appendChild(lowLabel)
        tasksForm.appendChild(titleForm)
        tasksForm.appendChild(dateForm)
        tasksForm.appendChild(priorDiv)
        modalBtn.appendChild(submitModal)
        modalBtn.appendChild(closeModal)
        tasksModalBody.appendChild(modalTitle)
        tasksModalBody.appendChild(tasksForm)
        tasksModalBody.appendChild(modalBtn)
        tasksModal.appendChild(tasksModalBody)

        document.body.appendChild(tasksModal)
    })();
}