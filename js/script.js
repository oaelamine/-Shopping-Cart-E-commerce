//SELECTION ELEMENTS

const userInfo = document.querySelector("#user_info");
const user = document.querySelector("#user");
const links = document.querySelector("#links");
const logout = document.querySelector("#logout");

//GET USER DATA
const userData = JSON.parse(localStorage.getItem("user"));

if (userData.username) {
	links.remove();
	userInfo.style.display = "flex";
	user.innerHTML = userData.username;
}

//FUNCTIONs

const logoutfunc = function () {
	window.location = "register.html";
	localStorage.clear();
};

//EVENT LISTNER
logout.addEventListener("click", logoutfunc);
