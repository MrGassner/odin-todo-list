import _ from 'lodash';
import './style.css';
import Project from './projects.js'

function createSidebar() {
  const sidebar = document.createElement('div')
  const sideNav = document.createElement('nav')
  const btnNew = document.createElement('button')
  const title = document.createElement('h1')
  const projDiv = document.createElement('div')
  const projects = document.createElement('ul')
  const projects2 = document.createElement('ul')
  const test = document.createElement('li')
  const test1 = document.createElement('li')
  const test2 = document.createElement('li')
  const test3 = document.createElement('li')
  const test4 = document.createElement('li')
  const test5 = document.createElement('li')

  
  sidebar.classList.add('sidebar')
  projDiv.classList.add('projDiv')
  sideNav.classList.add('sideNav')
  btnNew.classList.add('btnNew')
  projects.classList.add('project', 'closed')
  projects2.classList.add('project', 'closed')
  
  test.innerHTML = 'My first project'
  test1.innerHTML = 'My second project'
  test2.innerHTML = 'My third project'
  test3.innerHTML = 'My first project'
  test4.innerHTML = 'My second project'
  test5.innerHTML = 'My third project have a very long title'
  title.innerHTML = 'Projects'
  btnNew.innerHTML = 'New Project'
  projects.innerHTML = 'This is a Project'
  projects2.innerHTML = 'This is another Project'
  

  projects.appendChild(test)
  projects.appendChild(test1)
  projects.appendChild(test2)
  projects2.appendChild(test3)
  projects2.appendChild(test4)
  projects2.appendChild(test5)
  sideNav.appendChild(btnNew)
  projDiv.appendChild(projects)
  projDiv.appendChild(projects2)
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


document.body.appendChild(createSidebar());
document.body.appendChild(createHeader());
document.body.appendChild(document.createElement('main'));


const FolderOpener = (() => {
  const folders = document.querySelectorAll('.project')
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
  }))
})();
