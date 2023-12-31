let inputs = Array.from(document.querySelectorAll(".inputs"))
let labels = Array.from(document.querySelectorAll('.input__box label'))
let loginBtn = document.querySelector('.loginBtn')
let incorrect = document.querySelector('.incorrect')
let userLocal = JSON.parse(localStorage.getItem('userInfo'))



if (JSON.parse(localStorage.getItem("userName")) != null) {
    location.href = 'welcomePage.html'
}


// **********

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function (e) {
        e.target.labels[0].style.top = "-12px"
        e.target.labels[0].style.backgroundColor = "#24353F"
        e.target.labels[0].style.color = "var(--main-color)";
    })


    inputs[i].addEventListener('blur', function (e) {
        if (e.target.value == "") {
            e.target.labels[0].style.top = "5px"
            e.target.labels[0].style.backgroundColor = "transparent"
            e.target.labels[0].style.color = "#b1b7bd";
        }
    })
}

// ************

loginBtn?.addEventListener('click', function () {
    if (userLocal == null) {
        incorrect.style.display = 'block'
        clearInputsLogin()
    } else {
        for (let i = 0; i < userLocal.length; i++) {
            if (inputs[0].value == userLocal[i].email && inputs[1].value == userLocal[i].pass) {
                let userName = [{
                    name: userLocal[i].name,
                    email: userLocal[i].email
                }]
                localStorage.setItem('userName', JSON.stringify(userName))
                location.href = 'welcomePage.html'
                incorrect.style.display = 'none'
                clearInputsLogin()
            }else {
                incorrect.style.display = 'block'
            }
        }
    }
})

function clearInputsLogin() {
    inputs[0].value = ''
    inputs[1].value = ''

    inputs[1].focus()
    inputs[0].focus()
}

