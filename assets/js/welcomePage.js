let welcomeBox = document.querySelector('.welcome__box span')
let navbarBtn = document.querySelector('.navbar__btn')
let inputTask = document.querySelector('.input__add input')
let addBtn = document.querySelector('.btnAdd')
let userName = localStorage.getItem('userName')
let exit = localStorage.getItem('exit')

if (!userName) {
    location.replace('index.html')
}
navbarBtn?.addEventListener('click', function () {
    localStorage.removeItem("userName")
    location.replace('index.html')
})
let task = JSON.parse(localStorage.getItem('userName'))[0].email

welcomeBox.innerHTML = `hello ${JSON.parse(localStorage.getItem('userName'))[0].name}`



let tasksArray = []
if (localStorage.getItem(task) != null) {
    tasksArray = JSON.parse(localStorage.getItem(task))
    showTasks()
    inputTask.focus()
}

addBtn.addEventListener('click', addTasks)

function addTasks() {
if (inputTask.value != '') {
    let taskName = {
        name: inputTask.value,
        check: false,
    }
    tasksArray.push(taskName)
    showTasks()
    localStorage.setItem(task, JSON.stringify(tasksArray))
    clearButon()
}
}

function showTasks() {
    let cartona = ''
    for (let i = 0; i < tasksArray.length; i++) {
        if (tasksArray[i].check == true) {
            cartona = cartona + `<div class="list__inner mb-3">
            <i class="fas fa-check checked" index="${i}"></i>
            <span class="line-through">${tasksArray[i].name}</span>
            <i class="fas fa-xmark xmark" index="${i}"></i>
        </div>`
        } else {
            cartona = cartona + `<div class="list__inner mb-3">
            <i class="fas fa-check" index="${i}"></i>
            <span>${tasksArray[i].name}</span>
            <i class="fas fa-xmark xmark" index="${i}"></i>
        </div>`
        }
    }
    
    document.querySelector('.task__list').innerHTML = cartona

    checkTasks()
    deleteTask()
}

function checkTasks() {
    let checkIcon = Array.from(document.querySelectorAll(".list__inner .fa-check"))
    checkIcon.forEach(function (el) {
        el.addEventListener('click', function (event) {
            el.classList.toggle('checked')
            event.target.nextElementSibling.classList.toggle('line-through')
            let currentIndex = event.target.getAttribute('index')
            if (el.getAttribute('class').includes('checked') == true) {
                tasksArray[currentIndex].check = true
                localStorage.setItem(task, JSON.stringify(tasksArray))
            } else {
                tasksArray[currentIndex].check = false
                localStorage.setItem(task, JSON.stringify(tasksArray))
            }
        })
    })
}

function clearButon() {
    inputTask.value = ''
    inputTask.focus()
}

function deleteTask() {
    let xIcon = document.querySelectorAll('.xmark')
    xIcon.forEach(function (el) {
        el.addEventListener('click', function (event) {
            let currentIndex = event.target.getAttribute('index')
            tasksArray.splice(currentIndex, 1)
            showTasks()
            localStorage.setItem(task, JSON.stringify(tasksArray))
        })
    })
}

