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

const user = new User('', '');

/** Wait for event to login form */
loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	// first we take user data
	const name = nameInput.value;
	const email = emailInput.value;

	const error = validate(name, email);

	if (!error) {
		user.name = name;
		user.email = email;
		//if correct we display question page
		loginPage.style.display = 'none';
		questionPage.style.display = 'block';
	}
	console.log(user);
});
