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
let timer = 60;

const counter = () => {
	timer--;
	if (timer > 0) {
		console.log(timer);
    progressBar.value = timer;
    times.textContent = timer;
		setTimeout(counter, 1000);
	} else {
		addPoint();
		resultHandler();
		return timer;
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
	}
});

questionForm.addEventListener('click', (e) => {
  e.preventDefault();
  //we init timer
  timer = 60
	questionId++;
	if (timer > 0) {
		questionHandler(questionId);
  } else {
    addPoint()
		resultHandler();
	}
});

const questionHandler = (id) => {
	if (questions[id]) {
		counter();
		//we display first a question
		assertions.innerHTML = '';
		questionDetail.textContent = questions[id].titre;
		questions[id].assertions.forEach((ass) => {
			assertions.innerHTML += `
      <div class="form-group-question">
        <input type="radio" name="response" value="${ass}" required />
        <label for="nom">${ass}</label>
      </div>`;
		});
	} else {
		resultWinPage.style.display = 'block';
		loginPage.style.display = 'none';
		questionPage.style.display = 'none';
	}
};

const resultHandler = () => {
	resultWinPage.style.display = 'none';
	resultLostPage.style.display = 'block';
	loginPage.style.display = 'none';
	questionPage.style.display = 'none';
};

const addPoint = () => {
	if (timer <= 0) {
		console.log(user);
  } else {
    //check use response
  }
};
