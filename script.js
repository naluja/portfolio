const nav = document.querySelector('nav')
const form = document.querySelector('form')
const name = form.querySelector('#name')
const email = form.querySelector('#email')
const msg = form.querySelector('#message')
const btnSend = form.querySelector('.send')
const btnClear = form.querySelector('.clear')

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorText = formBox.querySelector(".errortext")

	formBox.classList.add("error")
	errorText.textContent = input.id + msg
}
const clearError = input => {
	const formBox = input.parentElement
	const errorText = formBox.querySelector(".errortext")

	formBox.classList.remove("error")
	errorText.textContent = ""
}
const clearAllErrors = input => {
	input.forEach(el => {
		clearError(el)
	})
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === "") {
			showError(el, " cannot be empty")
		} else {
			clearError(el)
		}
	})
}

const checkEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, " is not an email")
	}
}

const formValidation = (input, form) => {
	let errors = 0
	input.forEach(el => {
		if (el.parentElement.classList.contains("error")) {
			errors++
		}
	})
	if (errors == 0) {
		form.submit()
	}
}
const clearInput = input => {
    input.forEach(el => {
    el.value = ""
})
}

btnSend.addEventListener("click", e => {
    e.preventDefault()
    checkForm([name, email, message])
    checkEmail(email)
    formValidation([name, email, message], form)
})
btnClear.addEventListener("click", e => {
e.preventDefault()

clearAllErrors([name, email, message])
clearInput([name, email, message])})