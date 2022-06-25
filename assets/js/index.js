/** _________  PAGES,  COMPONENTS ________ */
const loginPage = document.getElementById('container-login');
const questionPage = document.getElementById('container-questions');
const resultPage = document.getElementById('container-result');
const resultLostPage = document.getElementById('container-resultLost');

/**___________LOGIN PAGE ELEMENTS________ */
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
const questionIdHandler = document.getElementById('questionId');
const nextBtn = document.getElementById('next');
const exitBtn = document.getElementById('exit');

/** ________  RESULT PAGE ELEMENTS */
const circleSuccess = document.querySelector('.circle-success');
const circleFail = document.querySelector('.circle-fail');
const nameResult = document.getElementById('name-result');
const emailResult = document.getElementById('email-result');
const pointsResult = document.getElementById('points-result');
const maxResult = document.getElementById('max-result');

const user = new User('', '');
let questionId = 0;
let timer = 60;
let selectedResponse;
let isChecked = false;

console.log(nextBtn);

const counter = () => {
	if (timer > 0) {
		progressBar.value = timer;
		times.textContent = timer;
		timer--;
		setTimeout(counter, 100);
	} else {
		checkResponse()
		timer = 60;
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

// nameInput.addEventListener('change', checkName);
emailInput.addEventListener('change', () => {});

/** Wait for event to login form */
loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	// first we take user data
	const name = nameInput.value;
	const email = emailInput.value;

	

	const error = validateSubmit(name, email);

	if (!error) {
		user.name = name;
		user.email = email;
		nameResult.textContent = user.name;
		emailResult.textContent = user.email;

		loginPage.style.display = 'none';
		questionPage.style.display = 'block';
		questionHandler(questionId);
		counter();
	}
});

//when user valid a response
questionForm.addEventListener('submit', (e) => {
	e.preventDefault();

	// //we init timer
	timer = 60;
	checkResponse();
	questionId++;

	questionHandler(questionId);
	// show the output:
});

const questionHandler = (id) => {
	if (id === questions.length - 1) {
		nextBtn.textContent = 'Terminer';
	}
	if (questions[id]) {
		//we display first a question
		assertions.innerHTML = '';
		nextBtn.disabled = true;
		nextBtn.style.backgroundColor = '#028a3d6b';
		questionDetail.textContent = questions[id].titre;

		questionIdHandler.textContent = questions[id].id;
		questions[id].assertions.forEach((ass) => {
			assertions.innerHTML += `
      <div class="form-group-question">
      <input type="radio" name="response" id="response${ass}" class="responseInput" value="${ass}" required />
      <label class="reponseValue" for="response${ass}">${ass}</label>
      </div>`;
		});

		const responseInput = document.querySelectorAll('input[name="response"]');
		for (const radioButton of responseInput) {
			radioButton.addEventListener('change', () => {
				nextBtn.disabled = false;
				nextBtn.style.backgroundColor = 'green';
			});
		}
	} else {
		resultHandler();
		timer = 0;
	}
};

exitBtn.addEventListener('click', () => {
	resultHandler();
});

const checkResponse = () => {
	const responseInput = document.querySelectorAll('input[name="response"]');
	for (const radioButton of responseInput) {
		if (radioButton.checked) {
			selectedResponse = radioButton.value;
			if (questions[questionId]) {
				if (questions[questionId].answer == selectedResponse) {
					user.increase();
				}
			}
			break;
		}
	}
	console.log(user, questions[questionId], selectedResponse);
};

//to chnage the component
const resultHandler = () => {
	loginPage.style.display = 'none';
	questionPage.style.display = 'none';
	resultPage.style.display = 'block';

	let max = questions.length;
	let points = user.point;
	pointsResult.textContent = points;
	maxResult.textContent = max;

	if (points >= max / 2) {
		circleFail.style.display = 'none';
		circleSuccess.style.display = 'flex';
	} else {
		circleFail.style.display = 'flex';
		circleSuccess.style.display = 'none';
	}
};
