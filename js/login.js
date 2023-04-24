//SELECT ELEMENTS
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const sign_in = document.querySelector("#sign_in");

//GET USER DATA
const userData = JSON.parse(localStorage.getItem("user"));

console.log(userData);

//FUNCTION
const login = function (e) {
	e.preventDefault();
	if (username.value === "" || password.value === "") {
		alert("COMPLEATE THE FORM");
	} else {
		if (
			userData.username &&
			userData.username.trim() === username.value.trim() &&
			userData.password &&
			userData.password === password.value
		) {
			window.location = "index.html";
		}
	}
};
//EVENT LISTNER

sign_in.addEventListener("click", login);
