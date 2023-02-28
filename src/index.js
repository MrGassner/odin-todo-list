import _ from 'lodash';
import './style.css';
import Modals from './modals.js';
import Main from './main.js';
import { ProjectManager, addToDisplay, addTask, addTaskBtn, addTaskToMain, delSingleTask, storeTaskStatus } from './projects.js'

function createSidebar() {
  const sidebar = document.createElement('div')
  const sideNav = document.createElement('nav')
  const btnNew = document.createElement('button')
  const title = document.createElement('h1')
  const projDiv = document.createElement('div')


  sidebar.classList.add('sidebar')
  projDiv.classList.add('projDiv')
  sideNav.classList.add('sideNav')
  btnNew.classList.add('btnNew')
  

  title.innerHTML = 'Projects'
  btnNew.innerHTML = 'New Project'  


  sideNav.appendChild(btnNew)
  sidebar.appendChild(title)
  sidebar.appendChild(projDiv)  

  return sidebar
}

function createHeader() {
  const header = document.createElement('header')
  const headerNav = document.createElement('nav')
  const projTitle = document.createElement('h1')
  const addProject = document.createElement('button')
  const delProject = document.createElement('button')

  projTitle.classList.add('currentTitle')
  headerNav.classList.add('headerNav')
  addProject.classList.add('add')
  delProject.classList.add('del')

  addProject.innerHTML = '+'
  delProject.innerHTML = 'x'
  projTitle.innerHTML = ''

  headerNav.appendChild(addProject)
  headerNav.appendChild(delProject)
  header.appendChild(projTitle)
  header.appendChild(headerNav)

  return header
}


document.body.appendChild(createSidebar());
document.body.appendChild(createHeader());
document.body.appendChild(document.createElement('main'));
Modals()
addToDisplay()
addTaskBtn()

const FolderOpener = (() => {
  const folders = document.querySelectorAll('.project')
  const currentTitle = document.querySelector('.currentTitle')
  const addTaskBtn = document.querySelector('.addTask')

  folders.forEach(folder => folder.addEventListener('click', event => {
    if (folder.classList.contains('closed')) {
      folder.classList.remove('closed')
      folder.classList.add('opened')
      addTaskBtn.style.display = 'block'
      addTaskToMain(event.target.firstChild.textContent)
      taskDone()
      delTask()

      for (let i = 1; i < folder.childNodes.length; i++) {
        folder.childNodes[i].style.display = 'block'
      }

      currentTitle.innerHTML = folder.firstChild.textContent;
      
      
    } else {
      folder.classList.add('closed')
      folder.classList.remove('opened')

      for (let i = 1; i < folder.childNodes.length; i++) {
        folder.childNodes[i].style.display = 'none'
      }
    }
  }))
})();

const addModalFunctions = (() => {
  const addModal = document.querySelector('.addModal')
  const openModal = document.querySelector('.add')
  const closeModal = document.querySelector('.close')
  const submitModal = document.querySelector('.submit')
  
  addModal.style.display = 'none'

  openModal.addEventListener('click', () => addModal.style.display = 'block')
  closeModal.addEventListener('click', () => addModal.style.display = 'none')
  submitModal.addEventListener('click', () => {
    addModal.style.display = 'none'
    ProjectManager(document.querySelector('.modalProjTitle').value, 'create')

  })
})();

const delModalFunctions = (() => {
  const delModal = document.querySelector('.delModal')
  const openModal = document.querySelector('.del')
  const closeModal = document.querySelector('.closeDel')
  const deleteModal = document.querySelector('.delete')
  
  delModal.style.display = 'none'

  closeModal.addEventListener('click', () => delModal.style.display = 'none')
  openModal.addEventListener('click', () => {
    delModal.style.display = 'block'
    

    const modalContent = document.querySelector('.modalContent')
    const currentTitle = document.querySelector('.currentTitle')

    modalContent.innerHTML = currentTitle.textContent
  })  

  deleteModal.addEventListener('click', () => {
    delModal.style.display = 'none'

    ProjectManager(document.querySelector('.currentTitle').textContent, 'delete')
    window.location.reload()
  })
})();

const taskModalFunctions = (() => {
  const taskModal = document.querySelector('.tasksModal')
  const addTaskBtn = document.querySelector('.addTask')
  const closeModal = document.querySelector('.closeModal')
  const submitModal = document.querySelector('.submitModal')
  const formInput = document.querySelectorAll('input[type="submit"]')

  taskModal.style.display = 'none'
  addTaskBtn.style.display = 'none'

  closeModal.addEventListener('click', () => taskModal.style.display = 'none')
  addTaskBtn.addEventListener('click', () => taskModal.style.display = 'block')
  submitModal.addEventListener('click', event =>  {

    const title = document.querySelector('.titleForm').value
    const date = document.querySelector('.dateForm').value
    const priority = document.querySelector('input[name="priority"]:checked').value

    event.preventDefault()
    addTask(title, date, priority)
    taskDone()
    delTask()
  })    
})();

const taskDone = (() => {
  const taskDone = document.querySelectorAll('input[type="checkbox"]')
  const currTitle = document.querySelector('.currentTitle')
  taskDone.forEach(task => task.addEventListener('change', event => {
    if (event.target.checked) {
      event.target.parentNode.setAttribute('id', 'done')
      storeTaskStatus(currTitle.textContent, event.target.parentNode.firstChild.textContent, 'complete')
    } else {
      event.target.parentNode.setAttribute('id', '')
      storeTaskStatus(currTitle.textContent, event.target.parentNode.firstChild.textContent,'incomplete')
    }
  }))
})

const delTask = (() => {
  const currTitle = document.querySelector('.currentTitle')
  const delTask = document.querySelectorAll('#delTask')
  delTask.forEach(task => task.addEventListener('click', event => {
    const task = event.target.parentNode.firstChild.textContent
    delSingleTask(currTitle.textContent, task)
    event.target.parentNode.remove()
  }))
})
