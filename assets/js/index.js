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

/** ________ QUESTION PAGE ELEMENTS________ */
const questionDetail = document.getElementById('question-detail');
const times = document.getElementById('times');
const progressBar = document.querySelector('.progress-bar');
const questionForm = document.getElementById('questionForm');
const assertions = document.getElementById('assertions');

const user = new User('', '');
let questionId = 0;
let timer = 10;
let selectedResponse;

const counter = () => {
	if (timer > 0) {
		console.log(timer);
		progressBar.value = timer;
		times.textContent = timer;
		timer--;
		setTimeout(counter, 1000);
	} else {
		// clearTimeout();
		addPoint();
		timer = 10;
		questionId++;
		if (questions[questionId]) {
			questionHandler(questionId);
			counter();
		} else {
			resultHandler();
			return;
		}
	}
};

const checkResponse = () => {
	if (questions[questionId]) {
		if (questions[questionId].answer == selectedResponse) {
			user.increase();
			console.log(user, selectedResponse);
		}
	}
};

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
		questionHandler(questionId);
		counter();
	}
});

//when user valid a response
questionForm.addEventListener('submit', (e) => {
	e.preventDefault();

	//we init timer
	timer = 60;
	questionId++;

	questionHandler(questionId);

	const responseInput = document.querySelectorAll('input[name="response"]');
	for (const radioButton of responseInput) {
		if (radioButton.checked) {
			selectedResponse = radioButton.value;
			if (questions[questionId]) {
				if (questions[questionId].answer == selectedResponse) {
					user.increase();
					console.log(user, selectedResponse);
				}
			}
			break;
		}
	}
	// show the output:
	addPoint();
});

const questionHandler = (id) => {
	if (questions[id]) {
		//we display first a question
		assertions.innerHTML = '';
		questionDetail.textContent = questions[id].titre;
		questions[id].assertions.forEach((ass) => {
			assertions.innerHTML += `
      <div class="form-group-question">
      <input type="radio" name="response" class="responseInput" value="${ass}" required />
      <label for="response">${ass}</label>
      </div>`;
		});
		checkResponse();
	} else {
		resultHandler();
		timer = 0;
	}
};

//to chnage the component
const resultHandler = () => {
	resultWinPage.style.display = 'none';
	resultLostPage.style.display = 'block';
	loginPage.style.display = 'none';
	questionPage.style.display = 'none';
};

const addPoint = () => {
	if (timer <= 0) {
		checkResponse();
		console.log(user);
	} else {
	}
};
