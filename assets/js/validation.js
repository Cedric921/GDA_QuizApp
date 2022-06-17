/** our validation model */
const validate = (name, email) => {
	let error = false;

	console.log(name);
	//we check if the name of user is not empty is not empty
	if (name.length <= 3) {
		errorNameOutput.style.display = 'block';
		error = true;
	} else {
		errorNameOutput.style.display = 'none';
	}

	//we check if the email of user is not empty is not empty
	if (email.length <= 5) {
		errorEmailOutput.style.display = 'block';
		error = true;
	} else {
		errorEmailOutput.style.display = 'none';
	}
	return error;
};
