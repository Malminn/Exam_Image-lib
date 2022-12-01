const form = document.querySelector("#contactForm");
const button = document.querySelector("#button");

const fname = document.querySelector("#fname");
const fnameError = document.querySelector("#fnameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const validate = document.querySelector(".validation");

function validateForm(event) {
	event.preventDefault();

	if (checkLength(fname.value, 5) === true) {
		fnameError.style.display = "none";
	} else {
		fnameError.style.display = "block";
	}

	if (validateEmail(email.value) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}

	if (checkLength(subject.value, 15) === true) {
		subjectError.style.display = "none";
	} else {
		subjectError.style.display = "block";
	}

	if (checkLength(message.value, 25) === true) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
	}
	if (
		checkLength(fname.value, 5) &&
		validateEmail(email.value) &&
		checkLength(subject.value, 15) &&
		checkLength(message.value, 25)
	) {
		submitForm();
	}
}

form.addEventListener("submit", validateForm);

function submitForm(submit) {
	validate.innerText = `Your message has been sent successfully!`;

	form.reset();

	// setTimeout(function() {
	//     validate.innerText = "";
	// }, 5000);
}

function checkLength(value, len) {
	if (value.trim().length >= len) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(email);
	return patternMatches;
}
