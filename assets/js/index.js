const loginPage = document.getElementById('container-login');
const questionPage = document.getElementById('container-questions');
const resultWinPage = document.getElementById('container-resultWin');
const resultLostPage = document.getElementById('container-resultLost');

/**___________LOGIN PAGE ELEMENTS________ */
/** Login events */
const loginForm = document.getElementById('loginForm');
const nameInput = document.getElementById('nom');
const emailInput = document.getElementById('email');
const errorNameOutput = document.querySelector('.error-name');
const errorEmailOutput = document.querySelector('.error-email');

/**___________LOGIN PAGE LOGIC________ */

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	// first we take user data
	const name = nameInput.value;
	const email = emailInput.value;
	console.log(name, email);

	//we check if use data is not empty
	if (!name.length >= 3) {
		errorNameOutput.style.display = 'block';
	} else if (!email.length >= 5) {
		errorEmailOutput.style.display = 'block';
	} else {
		//if correct we display question page
		loginPage.style.display = 'none';
		questionPage.style.display = 'block';
	}
});
