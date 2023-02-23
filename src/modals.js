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
}