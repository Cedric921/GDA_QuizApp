class Question {
	constructor(titre, answer) {
		this.titre = titre;
		this.answer = answer;
		this.assertions = [];
	}

	//  question.addAssertion({})
	addAssertion(label, value) {
		this.assertions.push({ label: label, value: value });
	}
}
