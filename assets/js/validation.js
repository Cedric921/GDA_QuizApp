/** our validation model */
const validateSubmit = (name, email) => {
	let error = false;
	const emailValid = email.match(
		/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	);

	console.log(name);
	//we check if the name of user is not empty is not empty
	if (name.length <= 0) {
		errorNameOutput.style.display = 'block';
		errorNameOutput.textContent =
			'N’oubliez pas de renseigner votre nom avant de commencer le Quiz.';
		error = true;
	} else if (name.length <= 2) {
		errorNameOutput.style.display = 'block';
		errorNameOutput.textContent =
			'Veillez renseigner un nom de plus de 2 lettres';
		error = true;
	} else {
		errorNameOutput.style.display = 'none';
	}

	//we check if the email of user is not empty is not empty
	if (email.length <= 0) {
		errorEmailOutput.style.display = 'block';
		errorEmailOutput.textContent =
			'N’oubliez pas de renseigner votre email avant de commencer le Quiz';
		error = true;
	} else if (!emailValid) {
		errorEmailOutput.style.display = 'block';
		errorEmailOutput.textContent =
			'Veillez renseignez une adresse email valide';
		error = true;
	} else {
		errorEmailOutput.style.display = 'none';
	}
	return error;
};

const checkName = () => {
	const userName = nameInput.value;
	console.log(userName);

	if (userName.length < 3) {
		errorNameOutput.style.display = 'block';
		errorNameOutput.textContent = 'Le nom doit etre de plus de 3 caracteres';
	} else {
		errorNameOutput.style.display = 'block';
	}
};
