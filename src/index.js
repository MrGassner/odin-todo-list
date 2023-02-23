import _ from 'lodash';
import './style.css';
import Project from './projects.js'
import { ProjectManager, addToDisplay } from './projects.js'

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

  projTitle.innerHTML = 'This is a Project'
  addProject.innerHTML = '+'
  delProject.innerHTML = 'x'

  headerNav.appendChild(addProject)
  headerNav.appendChild(delProject)
  header.appendChild(projTitle)
  header.appendChild(headerNav)

  return header
}

Project()
document.body.appendChild(createSidebar());
document.body.appendChild(createHeader());
document.body.appendChild(document.createElement('main'));
addToDisplay()

const FolderOpener = (() => {
  const folders = document.querySelectorAll('.project')
  const currentTitle = document.querySelector('.currentTitle')

  folders.forEach(folder => folder.addEventListener('click', () => {
    if (folder.classList.contains('closed')) {
      folder.classList.remove('closed')
      folder.classList.add('opened')

      for (let i = 1; i < folder.childNodes.length; i++) {
        folder.childNodes[i].style.display = 'block'
      }
      
    } else {
      folder.classList.add('closed')
      folder.classList.remove('opened')

      for (let i = 1; i < folder.childNodes.length; i++) {
        folder.childNodes[i].style.display = 'none'
      }
    }

    currentTitle.innerHTML = folder.firstChild.textContent

  }))
})();

const modalFunctions = (() => {
  const addModal = document.querySelector('.addModal')
  const openModal = document.querySelector('.add')
  const deleteModal = document.querySelector('.del')
  const closeModal = document.querySelector('.close')
  const submitModal = document.querySelector('.submit')
  
  addModal.style.display = 'none'

  openModal.addEventListener('click', () => addModal.style.display = 'block')
  closeModal.addEventListener('click', () => addModal.style.display = 'none')
  submitModal.addEventListener('click', () => {
    addModal.style.display = 'none'
    ProjectManager(document.querySelector('.modalProjTitle').value, 'create')
  })
  deleteModal.addEventListener('click', () => {
    console.log('delete')
  })
})();
