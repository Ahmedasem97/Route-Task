let regexName = /^[a-zA-Z0-9_\.]{3,25}$/
let regexEmail = /^[a-zA-z0-9-]{3,50}@[a-z]{2,8}\.com$/
let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
let inputsName = document.querySelector('.inputsName')
let inputsEmail = document.querySelector('.inputsEmail')
let inputsPass = document.querySelector('.inputsPass')
let signUpBtn = document.querySelector(".signUpBtn")
let validName = document.querySelector(".validOne")
let validEmail = document.querySelector(".validTwo")
let validPass = document.querySelector(".validThree")
let resultSuccess = document.querySelector('.success')
let userInfoArray = []
if (localStorage.getItem("userInfo") != null) {
    userInfoArray = JSON.parse(localStorage.getItem("userInfo"))
}


inputsName?.addEventListener("change", function (e) {
    if (regexName.test(inputsName.value) == false) {
        validName.style.display = "block"
        resultSuccess.style.display = 'none'
    } else {
        validName.style.display = "none"
        resultSuccess.style.display = 'none'
    }
})
inputsEmail?.addEventListener("change", function () {
    if (regexEmail.test(inputsEmail.value) == false) {
        validEmail.style.display = "block"
    } else {
        validEmail.style.display = "none"
    }
})
inputsPass?.addEventListener("change", function () {
    if (regexPass.test(inputsPass.value) == false) {
        validPass.style.display = "block"
    } else {
        validPass.style.display = "none"
    }
})


signUpBtn?.addEventListener("click", function () {
    if (validName.style.display == "none" && validEmail.style.display == "none" && validPass.style.display == "none") {
        if (userInfoArray[0] == undefined) {
            let userInfo = {
                name: inputsName.value,
                email: inputsEmail.value,
                pass: inputsPass.value,
            }
            userInfoArray.push(userInfo)
            localStorage.setItem("userInfo", JSON.stringify(userInfoArray))
            resultSuccess.style.display = 'block'
            clearInputsSignUp()
        } else {
            let cartona = 0
            for (let i = 0; i < userInfoArray.length; i++) {
                if (inputsEmail.value == userInfoArray[i].email ) {
                    cartona++
                }
            }
            if (cartona == 0) {
                let userInfo = {
                    name: inputsName.value,
                    email: inputsEmail.value,
                    pass: inputsPass.value,
                }
                userInfoArray.push(userInfo)
                localStorage.setItem("userInfo", JSON.stringify(userInfoArray))
                resultSuccess.style.display = 'block'
                clearInputsSignUp()
            } else {
                validEmail.style.display = "block"
                validEmail.innerHTML = '<i class="fas fa-x me-1"></i> <span>This account has already been registered</span>'
                cartona = 0
            }
        }

    }
})


function clearInputsSignUp() {
    inputsName.value = ''
    inputsEmail.value = ''
    inputsPass.value = ''
    inputsEmail.focus()
    inputsPass.focus()
    inputsName.focus()
}

