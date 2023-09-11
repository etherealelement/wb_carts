window.addEventListener("DOMContentLoaded", () => {
	"use strict";
	const inputEmail = document.querySelector(".text-3");
	const inputPhone = document.querySelector(".text-4");
	const inputInn = document.querySelector(".text-5");
	const formSpan = document.querySelector(".form__span");
	const formSpanNext = document.querySelector(".form__span-next");
	const formSpanInn = document.querySelector(".form__span-inn");
	const formDescr = document.querySelector(".form__descr");
	const inputName = document.querySelector(".text-1")
	const formSpanName = document.querySelector(".form__span-name");
	const inputSurname = document.querySelector(".text-2")
	const formSpanSurname = document.querySelector(".form__span-surname")
	// surname validation 

	inputSurname.addEventListener("blur", function() {
		if(this.value.length === 0) {
			formSpanSurname.innerHTML = "Укажите фамилию"
			formSpanSurname.classList.add("form__surname-visible")
		} else {
			formSpanSurname.classList.remove("form__surname-visible")
		}
	})

	// name validation
	inputName.addEventListener("blur", function() {
		if(this.value.length === 0) {
			formSpanName.innerHTML = "Укажите имя"
			formSpanName.classList.add("form-visible-name")
		} else {
			formSpanName.classList.remove("form-visible-name")
		}
	})




	// 


	// email validation
	inputEmail.addEventListener("blur", function() {
		const inputEmailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

		if (!inputEmailRegex.test(this.value)) {
			inputEmail.classList.add("unvalid");
			formSpan.classList.add("form__span-visible");
		} else {
			inputEmail.classList.remove("unvalid");
			formSpan.classList.remove("form__span-visible");
		}

		if(this.value.length === 0) {
			formSpan.innerHTML = "Укажите электронную почту"
		} else {
			formSpan.innerHTML = "Проверьте адресс электронной почты"
		}
	})

	inputEmail.addEventListener("focus", function(){
		inputEmail.classList.remove("unvalid")
	})

	// 

	// phone validation

	inputPhone.addEventListener("blur", function() {
		const inputPhoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

		if (!inputPhoneRegex.test(this.value)) {
			inputPhone.classList.add("unvalid");
			formSpanNext.classList.add("next-visible-block")
		} else {
			inputPhone.classList.remove("unvalid")
			formSpanNext.classList.remove("next-visible-block")
		}

		if(this.value.length === 0) {
			formSpanNext.innerHTML = "Укажите номер телефона"
		} else {
			formSpanNext.innerHTML = "Формат: +9 999 999 99 99"
		}
	})

	inputPhone.addEventListener("focus", () => {
		inputPhone.classList.remove("unvalid")
	})
	// 

	// inn

	inputInn.addEventListener("blur", function() {
		if (this.value.length > 14 || this.value.length < 14) {
			inputInn.classList.add("unvalid");
			formSpanInn.classList.add("next-visible-inn")

		} else {
			inputInn.classList.remove("unvalid");
			formSpanInn.classList.remove("next-visible-inn")
		}

		if (this.value.length === 0) {
			formSpanInn.innerHTML = "Укажите ИНН";
			formDescr.innerHTML = "";
		} else {
			formSpanInn.innerHTML = "Проверьте ИНН";
			formDescr.innerHTML = "";
		}
	})

	inputInn.addEventListener("focus", () => {
		inputInn.classList.remove("unvalid")
	})
	
});
