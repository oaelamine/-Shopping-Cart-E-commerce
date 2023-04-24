//SELECT ELEMENTS
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const sign_in = document.querySelector("#sign_up");

//FUNCTION
const register = function (e) {
	e.preventDefault();
	if (username.value === "" || password.value === "" || email.value === "") {
		alert("PLEASE COMPLRAT THE FORM");
	} else {
		//localStorage.setItem("username", username.value);
		//localStorage.setItem("password", password.value);
		//localStorage.setItem("email", email.value);

		const user = {
			username: username.value,
			password: password.value,
			email: email.value,
		};

		localStorage.setItem("user", JSON.stringify(user));

		setTimeout(() => {
			window.location = "login.html";
		}, 1500);
	}
};

//EVENT LISTNERS
sign_in.addEventListener("click", register);
