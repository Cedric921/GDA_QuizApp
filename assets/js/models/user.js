
class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
		this.point = 0;
	}

	increase() {
		this.point += 1;
	}
}